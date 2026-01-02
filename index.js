import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config({ path: "./.env" });
connectDB();

const app = express();

// ✅ FIXED
app.use(express.json());

app.get("/", (req, res) => {
  res.send("app is working");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
