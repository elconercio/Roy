export const getIndex = async (req,res)=>{
    try{
        res.json({message:'Hi'});
    } catch(error) {
        return res.status(500).json({
            message:'Something goes wrong'
        });
    }
};
