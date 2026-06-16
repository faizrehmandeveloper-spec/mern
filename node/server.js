import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";

  dotenv.config();

  const app = express();

  connectDb();


  
  app.use(express.json());
  app.use(cors());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("server is running successfully");
});

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`server is running ${port}`);
});

