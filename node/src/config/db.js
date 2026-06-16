import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dns from 'dns';
dotenv.config();
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

const connectDb = async () => {
    console.log("connecting to database");
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    }catch(error){
        console.log(error.message);
        process.exit(1);
    }
}

export default connectDb;
