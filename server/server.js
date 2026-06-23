import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";


const app = express();
const PORT = process.env.PORT || 3000;

// Database connection
await connectDB()


app.use(cors({
  origin: true,// your frontend URL
  credentials: true               // needed if using cookies/sessions
}));
app.use(express.json());


app.get('/', (req, res) => res.send("Server is liveee..."))
app.use('/api/users', userRouter)
app.use('/api/resumes', resumeRouter)
app.use('/api/ai', aiRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})