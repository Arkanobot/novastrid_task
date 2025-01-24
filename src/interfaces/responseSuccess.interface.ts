import IResponse from "./response.interface";

interface IResponseSuccess extends IResponse {
  message: string | string[];
  data?: any;
}

export default IResponseSuccess;
