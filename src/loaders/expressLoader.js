import express from "express";
import indexRouter from "../routes/index.js";

export default async (app) => {
  app.get("/status", (req, res) => {
    res.status(200).end();
  });
  app.head("/status", (req, res) => {
    res.status(200).end();
  });

  app.use(express.json());
  app.use("/", indexRouter());

  /* app.get('/', (req, res) => {
    res.json({ evp: '' })
  }) */
};
