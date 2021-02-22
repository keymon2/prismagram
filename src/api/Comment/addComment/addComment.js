import { isAuthenticated } from "../../../middleWares";

import {prisma} from "../../../../generated/prisma-client";

export  default {
    Mutation: {
        addComment: async(_, args, {request}) => {
            isAuthenticated( request );
            const { text, postId } = args;
            const { user } = request;
            console.log(user);
            const comment = await prisma.createComment({
                user: {
                    connect: {
                       id: user.id
                    }
                },
                post: {
                    connect: {
                        id: postId,
                    }
                },
                text
            });
            return comment;
        }
    }
};