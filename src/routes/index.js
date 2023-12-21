import { Router } from "express";

import consvosRouter from "./conversations/index.js";

export default function () {
  const app = Router();

  consvosRouter(app);

  return app;
}
