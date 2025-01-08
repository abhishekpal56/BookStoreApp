import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRouter from "./routes/book.route.js";
import userRouter from "./routes/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDB_URI;

// Connect to MongoDB

try {
  mongoose.connect(
    URI
    // {
    //  useNewUrlParser: true,
    //  useUnifiedTopology: true
    // }
  );
  console.log("Connected to MongoDB");
} catch (err) {
  console.log("Error:", err);
}

// Define Routes

app.use("/book", bookRouter);
app.use("/user", userRouter);



app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
