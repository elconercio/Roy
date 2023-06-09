import express from "express"
import royGptRoutes from './routes/royGpt.routes.js'
import respRoutes from './routes/resp.routes.js'

import cors from "cors"

const app = express();

const corsOptions = {origin:['https://brunodv.github.io','http://localhost:5173']}

app.use(cors(corsOptions));//todo el mundo

app.use(express.json()); //antes de que llegue a la ruta

app.use('/', royGptRoutes);
app.use('/api', respRoutes);

app.use((req,res,next)=>{
    res.status(404).json({
        message:'endpoint not found'
    });
});

export default app;