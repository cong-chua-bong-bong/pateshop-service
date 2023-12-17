import express from "express";
import {
  getProductsOfCategory,
  getCategories,
  addCategory,
  deleteCategory,
  updateCategory,
  getProduct,
  addProduct,
  searchProductsByName,
  searchProductsByPriceRange,
  updateProduct,
  deleteProduct,
} from "../controllers/categoriesController";

const categoriesRouter = express.Router();

categoriesRouter.get("/", getCategories);
categoriesRouter.get("/:categoryId", getProductsOfCategory);
categoriesRouter.post("/", addCategory);
categoriesRouter.put("/:categoryId", updateCategory);
categoriesRouter.delete("/:categoryId", deleteCategory);

categoriesRouter.get("/:categoryId/products/search", searchProductsByName);

categoriesRouter.get("/:categoryId/products/:productId", getProduct);
categoriesRouter.post("/:categoryId/products", addProduct);
categoriesRouter.put("/:categoryId/products/:productId", updateProduct);
categoriesRouter.delete("/:categoryId/products/:productId", deleteProduct);

categoriesRouter.get(
  "/:categoryId/products/filter",
  searchProductsByPriceRange
);

export default categoriesRouter;
