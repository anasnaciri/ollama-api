import { Router } from "express";
import ollama from "../../ollama/index.js";
export default async (app) => {
  const route = Router();

  app.use("/conversations", route);

  route.get("/", async (req, res) => {
    res.json({ data: "list all the convos" });
  });

  route.get("/:id", async (req, res) => {
    const { id } = req.params;

    const stream = await ollama.stream(`${id}`);

    const chunks = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }

    const answer = chunks.join("");
    res.json(answer);
  });
};
