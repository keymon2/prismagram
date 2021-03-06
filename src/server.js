import "./env";

import logger from "morgan";
import schema from "./schema";
import { GraphQLServer } from "graphql-yoga";
import "./passport";
import{ isAuthenticated} from "./middleWares"
import{ authenticateJwt } from "./passport";


const PORT = process.env.PORT || 4001;


const server = new GraphQLServer({ schema,
    context: ({ request  }) => ({ request ,isAuthenticated})
});

server.express.use(logger("dev"));
server.express.use( authenticateJwt);


server.start(
    {port: PORT}, () => 
    console.log(`Server running on http://localhost:${PORT}`)
);