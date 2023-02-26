const mongoose=require("mongoose");

URI=""

const connectDB =(URI) =>{
    // console.log("connect db");
    return mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
}

module.exports=connectDB;