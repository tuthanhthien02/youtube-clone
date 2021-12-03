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

    getVideoById: async (id) => {
        const res = await request("/videos", {
            params: {
                part: "snippet,statistics",
                id: id,
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

    getVideoByKeyword: async (keyword) => {
        const res = await request("/search", {
            params: {
                part: "snippet",
                maxResults: 20,
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

    getRelatedVideos: async (id) => {
        const res = await request("/search", {
            params: {
                part: "snippet",
                relatedToVideoId: id,
                maxResults: 15,
                type: "video",
            },
        });

        return res.data.items;
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
