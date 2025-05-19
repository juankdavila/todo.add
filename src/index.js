import express from 'express';
import routerTodos from "./routes/todos.routes.js";
import morgan from 'morgan';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json());

app.use(morgan('dev'));


app.use(routerTodos);




app.listen(3000,() => console.log('listening on port 3000'));