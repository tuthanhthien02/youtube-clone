import request from "./api";

export const videoAPI = {
    getPopularVideos: async (pageToken = "") => {
        const res = await request("/videos", {
            params: {
                part: "snippet,contentDetails,statistics",
                chart: "mostPopular",
                regionCode: "VN",
                maxResults: 20,
                pageToken: pageToken,
            },
        });

        return res;
    },

    getVideoByCategory: async (keyword, pageToken) => {
        const res = await request("/search", {
            params: {
                part: "snippet",
                maxResults: 20,
                pageToken: pageToken,
                q: keyword,
                type: "video",
            },
        });

        return res;
    },

    getVideoDetails: async (id) => {
        const res = await request("/videos", {
            params: {
                part: "contentDetails,statistics",
                id: id,
            },
        });

        return res;
    },

    getChannelIcon: async (id) => {
        const res = await request("/channels", {
            params: {
                part: "snippet",
                id: id,
            },
        });

        return res;
    },
};
