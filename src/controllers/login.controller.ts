import { Request, Response } from "express";
import { IResponseSuccess, IResponseError } from "../interfaces";
import { generateErrorResponse, generateSuccessResponse } from "../helpers";
import { User } from "../entity/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function login(req: Request, res: Response<IResponseSuccess | IResponseError>) {
  const { username, password } = req.body;
  if (username && password) {
    try {
      const user = await User.findOneBy({ username: username });
      if (user) {
        const match = await bcrypt.compare(password, user.password);

        if (match) {
          const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: "48h" });

          res.cookie("auth", token);
          const success: IResponseSuccess = generateSuccessResponse(200, "Login successful");
          return res.status(200).json(success);
        }
      } else {
        const error: IResponseError = generateErrorResponse(401, "Invalid login credentials. Please try again.");
        return res.status(401).json(error);
      }
    } catch (err) {
      console.error(err);
      const error: IResponseError = generateErrorResponse(500, "Internal server error. Please try again later.");
      return res.status(500).json(error);
    }
  }
}

export default login;
