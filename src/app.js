import Express from "express";
import bodyParser from "body-parser";

export const app = new Express();

app.use(bodyParser.json());
