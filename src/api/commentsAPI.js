import request from "./api";

export const commentsAPI = {
    getCommentsOfVideoById: async (id) => {
        const res = await request("/commentThreads", {
            params: {
                part: "snippet",
                videoId: id,
            },
        });

        return res;
    },

    addComment: async (id, text, accessToken) => {
        const obj = {
            snippet: {
                videoId: id,
                topLevelComment: {
                    snippet: {
                        textOriginal: text,
                    },
                },
            },
        };

        const res = await request.post("/commentThreads", obj, {
            params: {
                part: "snippet",
            },
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return res;
    },
};
