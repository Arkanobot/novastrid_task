import { createDBConnection } from "./database";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import compression from "compression";
import { validateJSON } from "./middlewares";
import { logWithTimestamp } from "./helpers";
import loadRoutes from "./routes";
import { swagger } from "./docs";

//setting up dotenv to read environmental variables
dotenv.config();

createDBConnection
  .initialize()
  .then(async () => {
    const app = express();

    //setting up middlewares for the entire app
    app.use(cors({ credentials: true }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(compression());
    app.use(validateJSON);

    //routing for the app goes here
    loadRoutes(app);

    //setting up swagger documentation for API
    if (process.env.DEV_ENV) {
      //setup swagger if in dev mode
      swagger(app);
    }

    //starting the server

    app.listen(process.env.PORT, () => {
      logWithTimestamp(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log(error));
