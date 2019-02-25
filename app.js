import express from 'express';
import bodyParser from 'body-parser';
import routes from './app/api/v1/views/views';

const app =  express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(routes);

const PORT = 3333;

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
});