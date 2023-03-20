import express from 'express';

import todosRoute from './routes/todos';

import bodyParser from 'body-parser';

const app=express();

app.use(todosRoute); 

app.use(bodyParser.json());

app.listen(3000);
