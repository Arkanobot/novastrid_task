import IResponse from "./response.interface";
import { ValidationError } from "express-validator";

interface IResponseError extends IResponse {
  message: string | string[] | ValidationError[];
  data?: any;
}

export default IResponseError;
