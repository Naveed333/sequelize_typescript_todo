import express, { NextFunction, Request, Response } from "express";
import db from "./config/database.config";
import todoRouter from "./todo/route";

// db.authenticate()  if you use postgres

db.sync().then(() => {
  console.log("Connect to database");
});

const app = express();
const port = 9000;
app.use(express.json());
app.use(todoRouter);

app.listen(port, () => {
  console.log("Server is running on port ", port);
});
