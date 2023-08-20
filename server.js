import express from "express";
import dotenv from "dotenv";
import contactRouter from "./routes/contact_routes.js";
import userRouter from "./routes/user_routes.js";
import errorHandler from "./middleware/error_handler.js";
import connectDB from "./config/db_connection.js";

dotenv.config();

connectDB();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", contactRouter);
app.use("/api/users", userRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
