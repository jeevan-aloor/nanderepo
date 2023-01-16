const mongoose=require("mongoose")

const mystructure=mongoose.Schema({
    name:String,
    number:Number,
    age:Number
})

const MyData=mongoose.model("neha",mystructure)

module.exports={
    MyData
}