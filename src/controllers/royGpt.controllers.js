import { Configuration, OpenAIApi } from 'openai';

export const createResp = async (req,res)=>{
    try{
        const {pregunta}  = req.body;

        const apiKey = process.env.AK

        const configuration = new Configuration({ apiKey })

        const openai = new OpenAIApi(configuration)

        const model = 'gpt-3.5-turbo'

        const messages = [
            {
                role:'user',
                content:`${pregunta}`
                }
        ]

const completion = await openai.createChatCompletion({
    model,
    messages
})

const resp = completion.data.choices[0].message.content;

console.log(resp)

res.status(201).json({ 
    resp
 });

}catch(error){
        return res.status(500).json({
            message:'Something goes wrong',
            error
        });
    }            

};

