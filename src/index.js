import express from 'express';
import routerTodos from "./routes/todos.routes.js";
import {dbclient} from './db.js';
import * as bodyParser from "express";

const app = express();
app.use(express.json());


app.use(routerTodos);




app.listen(3000,() => console.log('listening on port 3000'));