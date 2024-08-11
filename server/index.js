const express = require("express");
const route  = require("./routes/route");
const cors = require("cors");
const dbConnect = require("./config/database");
const app = express();

app.use(express.json());
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.use(cors());	
app.use('/api/v1',route);
dbConnect();

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
app.get("/",(req,res)=>{
    res.send(`<h1>This is home page </h1>`);
})

