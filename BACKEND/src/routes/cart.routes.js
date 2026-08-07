import express from "express";
import { authenticateUser } from "../middlewares/auth.middleware.js"
import { validateAddTocart } from "../validators/cart.validator.js";
import { addToCart,getCart } from "../controllers/cart.controller.js";
const router = express.Router();

router.post("/add/:productId/:variantId", authenticateUser,validateAddTocart,addToCart)
router.get("/",authenticateUser,getCart)

export default router;