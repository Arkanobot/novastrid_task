import { Request, Response } from "express";
import { IResponseSuccess, IResponseError } from "../interfaces";
import { generateSuccessResponse, generateErrorResponse, logWithTimestamp } from "../helpers";
import { User } from "../entity/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function register(req: Request, res: Response<IResponseSuccess | IResponseError>) {
  const { username, name, email, password } = req.body;
  //early exit if any fields not present
  //must move to a middleware if used in multiple routes
  try {
    if (!username || !name || !password || !email) {
      const error: IResponseError = generateErrorResponse(400, "please provide all required fields");
      return res.status(400).json(error);
    }

    //checking if the user already exists or username already exists
    const existingUserCheckUserName = await User.findOneBy({ username: username });

    const existingUserCheckEmail = await User.findOneBy({ email: email });

    if (existingUserCheckUserName || existingUserCheckEmail) {
      const error: IResponseError = generateErrorResponse(409, "Username or Email already exists");

      return res.status(409).json(error);
    }

    //we register the user

    //hashing password
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User();
    user.email = email;
    user.name = name;
    user.username = username;
    user.password = passwordHash;
    User.save(user);

    //auto login user
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: "48h" });

    res.cookie("auth", token);

    const success: IResponseSuccess = generateSuccessResponse(200, "Registration successful, logged in");
    return res.status(200).json(success);
  } catch (err) {
    logWithTimestamp(err);
    const error: IResponseError = generateErrorResponse(500, "Internal server error. Please try again later.");
    return res.status(500).json(error);
  }
}

export default register;
