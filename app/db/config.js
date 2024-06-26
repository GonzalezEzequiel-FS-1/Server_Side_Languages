const mongoose = require("mongoose");
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Connected to MongoDB successfully ${conn.connection.host}`);
    }catch (error){
        console.error(`Error Connection to MongoDB: ${error.message}`);
        process.exit(1);
    }
}

module.exports =connectDB;