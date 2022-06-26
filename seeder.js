import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./users.js";
import data from "./data.js";
import User from "./models/usermodel.js";
import Product from "./models/productmodel.js";
import Order from "./models/ordermodel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdusers = await User.insertMany(users);

    const adminuser = createdusers[0]._id;

    const sampleproducts = data.map((Product) => {
      return { ...Product, user: adminuser };
    });

    await Product.insertMany(sampleproducts);

    console.log("Data Imported!");
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
