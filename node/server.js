import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";

dotenv.config();

const app = express();
const clientUrl =
  process.env.CLIENT_URL ?? "http://localhost:5173";

connectDb();

app.use(express.json());
app.use(
  cors({
    origin: clientUrl,
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("server is running successfully");
});

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`server is running ${port}`);
});

