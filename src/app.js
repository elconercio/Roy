import express from "express"
import royGptRoutes from './routes/royGpt.routes.js'
import cors from "cors"

const app = express();

const corsOptions = {origin:'https://brunodv.github.io'}

app.use(cors(corsOptions));//todo el mundo

app.use(express.json()); //antes de que llegue a la ruta

app.use('/', royGptRoutes);

app.use((req,res,next)=>{
    res.status(404).json({
        message:'endpoint not found'
    });
});

export default app;