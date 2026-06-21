import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";


const app = express();
const PORT = process.env.PORT || 3000;

// Database connection
await connectDB()

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send("Server is liveee..."))
app.use('/api/users', userRouter)
app.use('/api/resumes', resumeRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})