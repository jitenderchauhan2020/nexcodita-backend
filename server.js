// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const inquiryRoutes = require("./routes/inquiryRoutes");
const { errorHandler } = require("./middlewares/errorMiddleware");

dotenv.config();
connectDB();

const app = express();

app.use(express.json()); 
app.use(cors());

app.use("/api/inquiries", inquiryRoutes); 
app.use(errorHandler); // Global error handling middleware

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
