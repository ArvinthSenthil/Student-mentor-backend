// const express = require('express')
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

import router from "./routes/productroute.js";
import userroute from "./routes/userroute.js";
import orderRoute from "./routes/orderRoute.js";
dotenv.config();

connectDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/products", router);
app.use("/users", userroute);
app.use("/orders", orderRoute);

app.get("/config/paypal", (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${PORT}`));
