import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
import { videoAPI } from "../../api/videoAPI";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiFillEye } from "react-icons/ai";
import {
    Wrapper,
    VideoThumbnailContainer,
    VideoThumbnail,
    VideoDuration,
    VideoInfoContainer,
    VideoTitle,
    VideoOwnerName,
    VideoMetaData,
    VideoViews,
    VideoDate,
} from "./styles/videoHorizontal";

export default function VideoHorizontal({ video, searchScreen }) {
    const history = useHistory();
    const {
        id: { videoId, kind },
        snippet: {
            channelId,
            channelTitle,
            description,
            title,
            publishedAt,
            thumbnails,
        },
    } = video;

    const isVideo = kind === "youtube#video";
    const [views, setViews] = useState(null);
    const [duration, setDuration] = useState(null);
    const [channelIcon, setChannelIcon] = useState(null);

    const seconds = moment.duration(duration).asSeconds();
    const _duration = moment.utc(seconds * 1000).format("mm:ss");

    useEffect(() => {
        const videoDetails = async () => {
            const {
                data: { items },
            } = await videoAPI.getVideoDetails(videoId);

            setDuration(items[0].contentDetails.duration);
            setViews(items[0].statistics.viewCount);
        };

        videoDetails();
    }, [videoId]);

    useEffect(() => {
        const channelIcon = async () => {
            const {
                data: { items },
            } = await videoAPI.getChannelIcon(channelId);

            setChannelIcon(items[0].snippet.thumbnails.default);
        };

        channelIcon();
    }, [channelId]);

    const handleClick = () => {
        history.push(`/watch/${videoId}`);
    };

    return (
        <Wrapper
            onClick={handleClick}
            col1={searchScreen ? "30%" : "45%"}
            col2={searchScreen ? "70%" : "55%"}
        >
            <VideoThumbnailContainer>
                <LazyLoadImage src={thumbnails.medium.url} effect="blur" />
                <VideoDuration>{_duration}</VideoDuration>
            </VideoThumbnailContainer>
            <VideoInfoContainer>
                <VideoTitle>{title}</VideoTitle>
                <VideoOwnerName>{channelTitle}</VideoOwnerName>
                <VideoMetaData>
                    <VideoViews>
                        {numeral(views).format("0.0a")} views
                    </VideoViews>
                    <VideoDate>{moment(publishedAt).fromNow()}</VideoDate>
                </VideoMetaData>
            </VideoInfoContainer>
        </Wrapper>
    );
}
