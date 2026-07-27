import {Router} from "express";
import {validateUserInput,validateLoginUser} from "../validators/auth.validator.js"
import {register,login} from "../controllers/auth.controller.js"


const authRouter = Router();



authRouter.post("/register",validateUserInput,register)
authRouter.post("/login",validateLoginUser,login)

export default authRouter;