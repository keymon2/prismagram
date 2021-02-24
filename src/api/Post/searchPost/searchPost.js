import {
    prisma
} from "../../../../generated/prisma-client";

export default {Query: {
    searchPost : async (_, args) => prisma.posts({
        where: {
            OR: [{
                    Loaction_starts_with: args.term
                },
                {
                    category_starts_with: args.term
                }
            ]
        }
    })
}};