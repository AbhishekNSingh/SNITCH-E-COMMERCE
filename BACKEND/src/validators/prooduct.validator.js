import { body, validationResult } from "express-validator"

function validateRequest(req, res, next) {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ message: "Validation error", errors: error.array() })
    }

    next();
}

export const createProductValidator = [
    body("title").notEmpty().withMessage("Title is required"),
    body("description").notEmpty().withMessage("description is required"),
    body("priceAmount").isNumeric().withMessage("priceAmount must be a number"),
    body("priceCurrency").notEmpty().withMessage("price currency must be a number"),
    validateRequest
]