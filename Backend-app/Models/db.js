const mongoose=require('mongoose');

const mongo_uri=process.env.MONGO_CONN;

mongoose.connect(mongo_uri)
.then(()=>{
console.log("MongoDB Connected...")
}).catch((err)=>{
    console.log("MongoDB Connection Error: ",err);
})