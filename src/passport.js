
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import prisma from "../generated/prisma-client"

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    
    secretOrKey: process.env.JWT_SECRET
};

const verifyUser = (payload, done)=>{
    const user = prisma.user({id : payload.id});
    try{
        if(user !== null){
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch( error ) {
        return done(error, false);
    }
};

export const authenticateJwt= (req,res,next) => ("jwt", { sessions : false },
    (error,user) => {
     if (user) {
         req.user = user;
     }
     next();
    })(req,res,next);

passport.use(new Strategy(jwtOptions, verifyUser));
passport.initialize();