import express from 'express';
import routerTodos from "./routes/todos.routes.js";

const app = express();
app.use(routerTodos);




app.listen(3000,() => console.log('listening on port 3000'));