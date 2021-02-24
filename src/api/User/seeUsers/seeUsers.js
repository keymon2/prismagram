import { prisma } from "../../../../generated/prisma-client";

export default{
    Query: {
        seeUsers: async(_, args) => {
            const { id } = args;
            const posts = await prisma.user({ id }).posts();
            const user = await prisma.user({ id });
            return{
                user,
                posts
            };
        }
    }
};