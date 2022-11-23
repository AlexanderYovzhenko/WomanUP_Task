import Express from "express";
import bodyParser from "body-parser";
import todoRoutes from "./resources/todo/todo.router";

export const app = new Express();

app.use(bodyParser.json());

app.use('', todoRoutes);
