import { adjectives, nouns } from "./words";
import dotenv from "dotenv";
import path from "path";
dotenv.config({path: path.resolve(__dirname, ".env") });

import nodemailer from "nodemailer";

import jwt from "jsonwebtoken";
export const generateSecret = () => {
    const randomNumber = Math.floor(Math.random() * adjectives.length);
    return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
}

const sendMail = email => {
    const options = {
        service: 'NAVER',
        host:'smtp.naver.com',
        port: 465,
        auth:{
            user:
            process.env.NAVER_ID,
            pass:
            process.env.NAVER_PASS
        }
    };
    const client = 
    nodemailer.createTransport(options);

    return client.sendMail(email);
};

export const sendSecretMail = (adress ,secret) =>{
    const email = {
        from: "sg0814203@naver.com",
        to: adress,
        subject: "Login Secret for prismagram",
        html: `Hello! Your login secret is<strong> ${secret}</strong>.<br/>Copy paste on the app/website to log in`
    };
    return sendMail(email);
};

export const generateToken = id => jwt.sign({id}, process.env.JWT_SECRET);
