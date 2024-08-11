const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
    }).then(()=>console.log("Db connected successfully")
    ).catch((err)=>{console.log("Error ocuured in Db connection",err)
    console.error(err);
    process.exit(1);
    })
}

module.exports=dbConnect;