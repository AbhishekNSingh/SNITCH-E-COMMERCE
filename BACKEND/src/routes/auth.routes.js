import { Router } from "express";
import { validateUserInput, validateLoginUser } from "../validators/auth.validator.js"
import { register, login, googlecallback } from "../controllers/auth.controller.js";
import passport from "passport";


const authRouter = Router();



authRouter.post("/register", validateUserInput, register)


authRouter.post("/login", validateLoginUser, login)


authRouter.get("/google", passport.authenticate('google', { scope: ['profile', 'email'] }))


authRouter.get('/google/callback',
    passport.authenticate('google', { session: false }),
    googlecallback)



export default authRouter;