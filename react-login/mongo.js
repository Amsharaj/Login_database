const mongoose=require('mongoose')

//var mongoURL='mongodb+srv://aamsharaj:tn29bp3799@cluster0.4ghpfgh.mongodb.net/PIZZA_BOX'

mongoose.connect("mongodb://localhost:27017/react-login")

// var dp=mongoose.connection

.then(()=>{
    console.log("Mongodp connection success")
})

.catch(()=>{
    console.log("Mongodp connection failed")
})

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
 const collection=mongoose.model("collection",newSchema)


module.exports=collection