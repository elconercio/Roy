import {pool} from '../db.js';

export const index = (req,res)=>res.json({message : "welcome to my API"});

export const ping = async (req,res)=>{
    const  [result] = await pool.query('SELECT "Pong" as result');
    res.json(result[0]);
};