import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'))
app.use(cors())

app.get('/', (req, res)=>{
    res.send('Hola mundo')
})

app.listen(3000, ()=>{
    console.log("servidor activo")
})