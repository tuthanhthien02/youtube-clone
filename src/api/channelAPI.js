import request from "./api";

export const channelAPI = {
    getChannelById: async (id) => {
        const res = await request("/channels", {
            params: {
                part: "snippet,statistics,contentDetails",
                id,
            },
        });

        return res;
    },

    checkSubscriptionStatus: async (id, accessToken) => {
        const res = await request("/subscriptions", {
            params: {
                part: "snippet",
                forChannelId: id,
                mine: true,
            },
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return res;
    },
};
