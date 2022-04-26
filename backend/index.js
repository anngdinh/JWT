const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoute = require("./routes/auth")
const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

dotenv.config()
mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("Connected to Mongo DB ...#")
})

app.use("/v1/auth", authRoute);









app.listen(8000, () => {
    console.log("Server is running on port 8000 ...#")
})