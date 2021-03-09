

export const USER_FRAGMENT = `
    id
    name
    avatar
`;

export const COMMENT_FRAGMENT = `
    id
    text
    user{
        ${USER_FRAGMENT}
    }
`;

export const FILE_FRAGMENT = `
    id
    url
`;

export const MESSAGE_FRAGMENT = `
    fragment messageParts on Message{
        id
        text
        from{
            ${USER_FRAGMENT}
        }
        to{
            ${USER_FRAGMENT}
        }
    }
`;
export const FULL_POST_FRAGMENT = `
    fragment postParts on Post{
        id
        location
        caption
        files {
            ${FILE_FRAGMENT}
        }
        comments{
            ${COMMENT_FRAGMENT}
        }
        user{
            ${USER_FRAGMENT}
        }
    }
`;
export const ROOM_FRAGMENT =`
    fragment RoomParts on Room {
        id
        participants {
            ${USER_FRAGMENT}
        }
        messges {
            ${MESSAGE_FRAGMENT}
        }
    }
`;