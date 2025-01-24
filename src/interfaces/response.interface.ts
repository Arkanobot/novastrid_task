import { ValidationError } from "express-validator";

interface IResponse {
  status: string;
  message?: string | string[] | ValidationError[];
  data?: any;
}

export default IResponse;
