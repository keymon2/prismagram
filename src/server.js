import dotenv from "dotenv";
import path from "path";
dotenv.config({path : path.resolve(__dirname,".env")});

import logger from "morgan";
import schema from "./schema";
import { GraphQLServer } from "graphql-yoga";
import { sendSecretMail } from "./util"

sendSecretMail("winwonlee97@gmail.com","123");

const PORT = process.env.PORT || 4001;


const server = new GraphQLServer({schema});

server.express.use(logger("dev"));

server.start(
    {port: PORT}, () => 
    console.log(`Server running on http://localhost:${PORT}`)
);