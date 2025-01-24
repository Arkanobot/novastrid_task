import { status } from "../constants";
import { ValidationError } from "express-validator";
import { IResponseSuccess, IResponseError } from "../interfaces";

//function to generate success response object

export const generateSuccessResponse = <T extends keyof typeof status>(
  httpStatus: T,
  message: string,
  data?: any
): IResponseSuccess => {
  const success: IResponseSuccess = {
    status: status[httpStatus],
    message: message,
  };
  //Add the data field only if data is provided
  if (data !== undefined) {
    success.data = data;
  }

  return success;
};

//function to generate error response object
export const generateErrorResponse = <T extends keyof typeof status>(
  httpStatus: T,
  message: string | string[] | ValidationError[],
  data?: any
): IResponseError => {
  const error: IResponseError = {
    status: status[httpStatus],
    message: message,
  };
  // Add the data field only if data is provided
  if (data !== undefined) {
    error.data = data;
  }
  return error;
};
