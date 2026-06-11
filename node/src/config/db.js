import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
    }catch(error){
        console.log(error.message);
        process.exit(1);
    }
}

export default connectDb;