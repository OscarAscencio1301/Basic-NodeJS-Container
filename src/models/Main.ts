import express from "express";
import cors from "cors";
import router from "../routes/routes";

export class Main {
  private app = express.application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("/data", router);
  }

  listen() {
    this.app.listen(3000, () => {
      console.log(`http://localhost:${3000}`);
    });
  }
}
