import {Router} from "express";
import validateUserInput from "../validators/auth.validator.js"



const authRouter = Router();



authRouter.post("/register",validateUserInput,)

export default authRouter;