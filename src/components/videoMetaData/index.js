import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import numeral from "numeral";
import ShowMoreText from "react-show-more-text";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import { BiShare, BiSave } from "react-icons/bi";
import {
    Wrapper,
    VideoPrimaryInfo,
    VideoPrimaryInfoDetail,
    VideoSecondaryInfo,
    VideoTitle,
    VideoViews,
    VideoDate,
    VideoReactions,
    VideoLikeButton,
    VideoDislikeLikeButton,
    VideoButtonAction,
    VideoButtonWrapper,
    ProgressLikeBar,
    VideoOwner,
    OwnerProfile,
    OwnerProfileContainer,
    OwnerInfoContainer,
    OwnerInfoPrimary,
    OwnerInfoSecondary,
    OwnerName,
    OwnerSubCount,
    SubscribeButton,
    VideoDescriptionContainer,
    VideoDescription,
} from "./styles/videoMetaData";
import {
    getChannelById,
    checkSubscriptionStatus,
} from "../../features/channel/channelSlice";

export default function VideoMetaData({ video, videoId }) {
    const dispatch = useDispatch();

    const { isSubscribed } = useSelector((state) => state.channel);
    const { channel } = useSelector((state) => state.channel);

    const {
        snippet: { channelId, channelTitle, description, title, publishedAt },
    } = video;

    const {
        statistics: { viewCount, likeCount, dislikeCount },
    } = video;

    const totalLikes = parseInt(likeCount) + parseInt(dislikeCount);
    const progressBarWidth = parseInt((likeCount / totalLikes) * 100);

    useEffect(() => {
        dispatch(getChannelById(channelId));
        dispatch(checkSubscriptionStatus(channelId));
    }, [dispatch, channelId]);

    return (
        <Wrapper>
            <VideoPrimaryInfo>
                <VideoTitle>{title}</VideoTitle>
                <VideoPrimaryInfoDetail>
                    <div>
                        <VideoViews>
                            {numeral(viewCount).format("0,0")} views
                        </VideoViews>
                        <VideoDate>{moment(publishedAt).fromNow()}</VideoDate>
                    </div>

                    <div>
                        <VideoReactions>
                            <div>
                                <VideoButtonWrapper>
                                    <VideoButtonAction>
                                        <span>
                                            <MdThumbUp />
                                        </span>
                                        <span>
                                            {numeral(likeCount).format("0.a")}
                                        </span>
                                    </VideoButtonAction>
                                </VideoButtonWrapper>

                                <VideoButtonWrapper>
                                    <VideoButtonAction>
                                        <span>
                                            <MdThumbDown />
                                        </span>
                                        <span>
                                            {numeral(dislikeCount).format(
                                                "0.a"
                                            )}
                                        </span>
                                    </VideoButtonAction>
                                </VideoButtonWrapper>

                                <ProgressLikeBar width={progressBarWidth} />
                            </div>

                            <div>
                                <VideoButtonWrapper>
                                    <VideoButtonAction>
                                        <span>
                                            <BiShare />
                                        </span>
                                        <span>Share</span>
                                    </VideoButtonAction>
                                </VideoButtonWrapper>

                                <VideoButtonWrapper>
                                    <VideoButtonAction>
                                        <span>
                                            <BiSave />
                                        </span>
                                        <span>Save</span>
                                    </VideoButtonAction>
                                </VideoButtonWrapper>
                            </div>
                        </VideoReactions>
                    </div>
                </VideoPrimaryInfoDetail>
            </VideoPrimaryInfo>

            <VideoSecondaryInfo>
                <VideoOwner>
                    <OwnerProfileContainer>
                        <OwnerProfile
                            src={channel?.snippet?.thumbnails?.default?.url}
                        />
                    </OwnerProfileContainer>
                    <OwnerInfoContainer>
                        <OwnerInfoPrimary>
                            <OwnerName>{channelTitle}</OwnerName>
                            <OwnerSubCount>
                                {numeral(
                                    channel?.statistics.subscriberCount
                                ).format("0.a")}{" "}
                                subscribers
                            </OwnerSubCount>
                        </OwnerInfoPrimary>
                        <OwnerInfoSecondary>
                            <SubscribeButton isSubscribed={isSubscribed}>
                                {isSubscribed ? "subscribed" : "subscribe"}
                            </SubscribeButton>
                        </OwnerInfoSecondary>
                    </OwnerInfoContainer>
                </VideoOwner>
                <VideoDescriptionContainer>
                    <ShowMoreText
                        lines={3}
                        more="SHOW MORE"
                        less="SHOW LESS"
                        expanded={false}
                        anchorClass="showMoreText"
                    >
                        {description}
                    </ShowMoreText>
                </VideoDescriptionContainer>
            </VideoSecondaryInfo>
        </Wrapper>
    );
}
