import express, { Application, NextFunction, Request, Response } from "express";

const app: Application = express();
const ports: Number = 4000;

app.listen(ports, () => {
  console.log("server listening on port :", ports);
});

app.use("/health", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ status: 200 });
});
