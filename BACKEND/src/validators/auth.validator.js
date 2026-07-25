import {body,validationResult} from "express-validator";


function validateRequest(req,res,next){
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
        
    }
    next()
}


export const validateUserInput = [
    body("email")
        .isEmail.withMessage("Email should be in valid format"),
    body("fullName")
        .notEmpty.withMessage("fullName is required")
        .length({min:3}).withMessage("fullName cannot be smaller than 3 characters"), 
    body("contact")
        .notEmpty.withMessage("conatact is required")
        .matches(/^\d{10}$/).withMessage("conatct must be a 10 digit number"),
    body("password")
        .length({min:6}).withMessage("pasword cannot be smaller than 6 characters"),

    validateRequest
]