import { pool } from '../db.js'

export const getEmployees = async (req,res)=>{
    try{
        const [rows] = await pool.query('SELECT * FROM employee');
        res.json(rows);
    } catch(error) {
        return res.status(500).json({
            message:'Something goes wrong'
        });
    }
};

export const getEmployee = async (req, res) =>{
    try{ 
        const {id}=req.params;
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?',[id]);

        if(rows.length<=0) 
        return res.status(404).json({
            message:'Employee not found'
        });

        res.json(rows[0]);

    } catch(error) {

        return res.status(500).json({
            message:'Something goes wrong'
        });
    }
};

export const createEmployees = async (req,res)=>{
    try{
    const { name, salary, inStock} = req.body;
    const [rows] = await pool.query('INSERT INTO employee (name, salary, inStock) VALUES(?, ?)',
    [name, salary, inStock]);

    res.status(201).json({ 
        id: rows.insertId,
        name,
        salary,
        inStock,
     });
    
    } catch(error){
        return res.status(500).json({
            message:'Something goes wrong'
        });
    }
};

export const deleteEmployees =  async (req,res)=>{
    try{
        const {id}=req.params;
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?',[id]);
    
    if(result.affectedRows<=0){ 
        return res.status(404).json({
            message:'Employee not found'
        });
    }
    res.sendStatus(204);

    } catch(error) {
        return res.status(500).json({
            message:'Something goes wrong'
        });
    }
};

export const updateEmployees = async(req,res)=>{
    const {id} = req.params;
    const {name, salary, inStock}=req.body;

    try{
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary), inStock = IFNULL(?, inStock) WHERE id=?',
        [name, salary, inStock, id]);

        if(result.affectedRows === 0) return res.status(404).json({
            message:'Employee not found'
        });

        const [rows] = await pool.query('SELECT * FROM employee WHERE id=?', [id]);
       
        res.json(rows[0]);
    
        } catch(error) {
            return res.status(500).json({
                message:'Something goes wrong'
        });
    }
    
    // PARA PUT 
    //const [result] = await pool.query('UPDATE employee SET name = ?, salary =? WHERE id=?', [name,salary,id])
    //PARA CAMBIAR UN VALRO PARCIAL MENTE CAMBIA EL CODIGO USANDO IFNULL
    
};


