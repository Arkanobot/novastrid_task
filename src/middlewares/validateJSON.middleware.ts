import { Request, Response, NextFunction } from "express";
import { IResponseError } from "../interfaces";
import { universalMessages } from "../constants";
import { generateErrorResponse } from "../helpers";

const validateJSON = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof SyntaxError && "body" in err) {
    //JSON Parse Error
    const error: IResponseError = generateErrorResponse(400, universalMessages.invalidJSON);
    return res.status(400).json(error);
  }

  next();
};

export default validateJSON;
