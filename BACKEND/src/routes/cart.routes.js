import express from "express";
import { authenticateUser } from "../middlewares/auth.middleware.js"
import { validateAddTocart,validateincrementCartItemQuantity } from "../validators/cart.validator.js";
import { addToCart,getCart,incrementCardItemQuantity } from "../controllers/cart.controller.js";
const router = express.Router();

router.post("/add/:productId/:variantId", authenticateUser,validateAddTocart,addToCart)
router.get("/",authenticateUser,getCart)
router.patch("/quantity/increment/:productId/:variantId",authenticateUser,validateincrementCartItemQuantity,incrementCardItemQuantity)

export default router;