import { prisma } from "../../../generated/prisma-client";

export default {
    Like:{
        post:({ id }) => prisma.like({id}).porst(),
        user: ( { id } ) => prisma.like({id}).user()
    }
};