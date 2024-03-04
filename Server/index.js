import express from 'express'
import cors from 'cors';

const app = express()

//midleware
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.json({message:"hola"})
})

app.listen(8000,()=>{
    console.log("server up running in http://localhost:8000/")
})