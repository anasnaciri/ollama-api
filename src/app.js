// implement security mesures, use helmet
// restrict api req rates
// implement auth middlewares

import express from "express";

const app = express();

app.use(express.json());

(await import("./loaders/index.js")).default(app);

app.get("/", (req, res) => {
  res.json({ method: req.method });
});

app.get("/", (req, res) => {
  res.json({ method: req.method });
});

app.get("/", (req, res) => {
  res.json({ method: req.method });
});

app.get("/", (req, res) => {
  res.json({ method: req.method });
});

app.listen(3008);
