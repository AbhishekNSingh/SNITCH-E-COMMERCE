import express from "express";
import cookiParser from "cookie-parser";
import morgan from "morgan";


import authRouter from "./routes/auth.routes.js";
import productRouter from "./routes/product.routes.js" 


import passport from "passport";
import {Strategy as GoogleStrategy} from "passport-google-oauth20"
import {CONFIG } from "./config/config.js"

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookiParser());
app.use(morgan("dev"));

app.use(passport.initialize());

passport.use(new GoogleStrategy({
  clientID: CONFIG.GOOGLE_CLIENT_ID,
  clientSecret: CONFIG.GOOGLE_CLIENT_SECRET,
  callbackURL: '/api/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));



app.use("/api/auth",authRouter)
app.use("/api/products",productRouter);


export default app;