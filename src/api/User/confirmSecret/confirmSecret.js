import { prisma } from "../../../../generated/prisma-client"
import {generateToken} from "../../../util";
export default {
    Mutation: {
        confirmSecret: async (_, args) => {
            const { email, secret } = args;
            const user = await prisma.user({email});
            await prisma.updateUser({
                where:{id : user.id },
                data:{
                    loginSecret: ""
                }
            })
            if (user.loginSecret === secret ){
                return generateToken(user.id);
            } else{
                throw Error ("Wrong email/secret combination");
            }
        }
    }
};
