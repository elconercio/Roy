import express from "express"
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'
import cors from "cors"

const app = express();

const whiteList = ['http://localhost:5173']

app.use(cors({origin:whiteList}));//todo el mundo

app.use(express.json()); //antes de que llegue a la ruta

app.use("/",indexRoutes);
app.use('/api',employeesRoutes);

app.use((req,res,next)=>{
    res.status(404).json({
        message:'endpoint not found'
    });
});

export default app;