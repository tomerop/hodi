const cors=require('cors')
const express=require('express');
const mongoose=require('mongoose')
const  post  = require('./routes/posts');

const app=express()

mongoose
  .connect("mongodb://127.0.0.1:27017/posts")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("coudnt connect to MogoDB"));
mongoose.set("strictQuery", false);

app.use(cors())
app.use(express.json())

app.use('/api/posts',post)


app.listen(4001,()=>{
    console.log('ready on server port 4001')
})