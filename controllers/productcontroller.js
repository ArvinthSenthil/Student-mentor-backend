import asyncHandler from "express-async-handler";
import Product from "../models/productmodel.js";

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const products = await Product.findById(req.params.id);

  if (products) {
    res.json(products);
  } else {
    res.status(404);
    throw new Error("product not found");
  }
});

export { getProducts, getProductById };
