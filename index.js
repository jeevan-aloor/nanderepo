const express=require("express")
const {connection}=require("./db")
const {MyData}=require("./model")
const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.get("/data",async(req,res)=>{
    try {
        const data=await MyData.find()
        res.send(data)
        
    } catch (error) {
        console.log("error")
        console.log(error)
        
    }
    

})

app.post("/posting",async(req,res)=>{
    const payload=req.body
    try {
        const data=new MyData(payload)
        await data.save()
        res.send("added")
        console.log(payload)
        
    } catch (error) {
        console.log("error")
        console.log(error)
        
    }
    
})




app.listen(5900,async()=>{
    try {
        await connection
        console.log("connected")
        
    } catch (error) {
        console.log(error)
        console.log("error")
        
    }
    console.log("server is running 5900")
})








