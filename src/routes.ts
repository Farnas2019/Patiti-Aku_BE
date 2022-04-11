import { Express, Request, Response } from "express";
import {authRoutes} from "./routes/auth.routes";
import { ConcentRoutes } from "./routes/concent.routes";
function routes(app: Express) {
  app.use("/users", authRoutes)
  app.use("/events", ConcentRoutes);

  app.get("/", function(req:Request, res:Response){
    res.send("To view the documentation visit ")
  })
}

export default routes;
