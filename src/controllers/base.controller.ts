import { Request, Response } from "express";
import { universalMessages } from "../constants";
import { IResponse, IResponseSuccess } from "../interfaces";
import { generateSuccessResponse } from "../helpers";

const baseRoute = (req: Request, res: Response): Response<IResponse> => {
  const success: IResponseSuccess = generateSuccessResponse(200, universalMessages.serverLive);
  return res.status(200).json(success);
};

export default baseRoute;
