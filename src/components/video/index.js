import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import request from "../../api/api";
import { videoAPI } from "../../api/videoAPI";
import {
    Wrapper,
    Thumbnail,
    Title,
    Details,
    Description,
    ChannelImage,
    ChannelName,
    VideoStats,
    Views,
    Date,
} from "./styles/video";
import { getVideoDetails } from "../../features/video/videoSlice";
import { AiFillEye } from "react-icons/ai";

export default function Video({ video }) {
    const dispatch = useDispatch();

    const {
        id,
        snippet: {
            channelId,
            channelTitle,
            title,
            publishedAt,
            thumbnails: { medium },
        },
    } = video;

    const [views, setViews] = useState(null);
    const [duration, setDuration] = useState(null);
    const [channelIcon, setChannelIcon] = useState(null);

    const seconds = moment.duration(duration).asSeconds();
    const _duration = moment.utc(seconds * 1000).format("mm:ss");

    const _videoId = id?.videoId || id;

    useEffect(() => {
        const videoDetails = async () => {
            const {
                data: { items },
            } = await videoAPI.getVideoDetails(_videoId);

            setDuration(items[0].contentDetails.duration);
            setViews(items[0].statistics.viewCount);
        };

        videoDetails();
    }, [_videoId]);

    useEffect(() => {
        const channelIcon = async () => {
            const {
                data: { items },
            } = await videoAPI.getChannelIcon(channelId);

            setChannelIcon(items[0].snippet.thumbnails.default);
        };

        channelIcon();
    }, [channelId]);

    return (
        <Wrapper>
            <Thumbnail>
                {/* <img src={medium.url} alt="" /> */}
                <LazyLoadImage src={medium.url} effect="blur" />
                <span className="video__duration">{_duration}</span>
            </Thumbnail>
            <Details>
                <ChannelImage>
                    {/* <img src={channelIcon?.url} alt="" /> */}
                    <LazyLoadImage src={channelIcon?.url} effect="blur" />
                </ChannelImage>
                <Description>
                    <Title>{title}</Title>
                    <ChannelName>{channelTitle}</ChannelName>
                    <VideoStats>
                        <Views>{numeral(views).format("0.a")} views</Views>
                        <Date>{moment(publishedAt).fromNow()}</Date>
                    </VideoStats>
                </Description>
            </Details>
        </Wrapper>
    );
}
