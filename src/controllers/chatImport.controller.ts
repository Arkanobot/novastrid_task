import { Request, Response } from "express";
import { IResponseError, IResponseSuccess } from "../interfaces";
import { generateSuccessResponse, generateErrorResponse, logWithTimestamp } from "../helpers";
import xlsx from "node-xlsx";

async function chatImport(req: Request, res: Response<IResponseSuccess | IResponseError>) {
  const file = req.file;

  //early exist in case of no file uploaded in req
  if (!file) {
    const error: IResponseError = generateErrorResponse(400, "No file uploaded");
    return res.status(400).json(error);
  }

  try {
    //parse data and check if all fields are present
    const parsedFile = xlsx.parse(file.path);

    console.log(parsedFile);

    //save to db

    //send success message

    const success: IResponseSuccess = generateSuccessResponse(200, "Data import successful");
    return res.status(200).json(success);
  } catch (err) {
    logWithTimestamp(err.message);
    const error: IResponseError = generateErrorResponse(500, "Internal server error. Please try again later.");
    return res.status(500).json(error);
  }
}

export default chatImport;
