export const 
COMMENT_FRAGMENT = `
    fragment CommentParts on Commnent{
        id
        text
        user{
            username
        }
    }    
`;