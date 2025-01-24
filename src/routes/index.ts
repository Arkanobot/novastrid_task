//controller imports

import { Application } from "express";
import { base, chatImport, login, register } from "../controllers";

//middleware imports

const loadRoutes = (app: Application) => {
  //base route to test if the server is live or not
  app.get("/", base);

  //route for general users - (unregistered / registered)
  app.post("/login", login);
  app.post("/register", register);

  //route for registered users
  app.post("/chat-import", chatImport);
};

export default loadRoutes;
