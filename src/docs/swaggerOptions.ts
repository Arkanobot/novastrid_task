import { Application } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerOptions, serve, setup } from "swagger-ui-express";
import { ISwaggerDefinition } from "../interfaces";

const swaggerSetup = (app: Application) => {
  const swaggerOptions: SwaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "API",
        version: "0.0.1",
        description: "API information",
        contact: {
          name: "Shreyas Bhat K.(Arkanobot)",
          email: "",
        },
        servers: [`${process.env.HOST}:${process.env.PORT}`],
      },
      host: `${process.env.HOST}:${process.env.PORT}`,
      basePath: "/",
    } as ISwaggerDefinition,
    apis: ["src/docs/swagger.yaml"],
  };

  const swaggerDocs = swaggerJSDoc(swaggerOptions);
  app.use("/api/docs", serve, setup(swaggerDocs));
};

export default swaggerSetup;
