const express=require("express");
const mongoose=require("mongoose");
const app=express();
app.listen(3000,()=>
{
    console.log("Connection established");
})
const dburl="mongodb+srv://maheshbabutumati2004:mahesh123@cluster0.jmzsi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Database connected")
})
.catch((err)=>
{
    console.log(err);
});
