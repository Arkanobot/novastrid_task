import IContact from "./contact.interface";

interface ISwaggerDefinition {
  info: {
    title: string;
    version: string;
    description: string;
    contact: IContact;
    servers: string[];
  };
  host: string;
  basePath: string;
}

export default ISwaggerDefinition;
