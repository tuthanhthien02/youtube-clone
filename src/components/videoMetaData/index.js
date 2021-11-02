import React from "react";
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

export default function VideoMetaData() {
    return (
        <Wrapper>
            <VideoPrimaryInfo>
                <VideoTitle>[MV] NU'EST(뉴이스트) _ FACE(페이스)</VideoTitle>
                <VideoPrimaryInfoDetail>
                    <div>
                        <VideoViews>
                            {numeral(296989).format("0.a")} views
                        </VideoViews>
                        <VideoDate>{moment("2021-05-11").fromNow()}</VideoDate>
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
                                            {numeral(2400).format("0.a")}
                                        </span>
                                    </VideoButtonAction>
                                </VideoButtonWrapper>

                                <VideoButtonWrapper>
                                    <VideoButtonAction>
                                        <span>
                                            <MdThumbDown />
                                        </span>
                                        <span>
                                            {numeral(200).format("0.a")}
                                        </span>
                                    </VideoButtonAction>
                                </VideoButtonWrapper>

                                <ProgressLikeBar />
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
                        <OwnerProfile src="https://yt3.ggpht.com/ytc/AKedOLRMb5KSHW0yr4bpgVMV3fNUPLw1rBGrscNSeWF-=s48-c-k-c0x00ffffff-no-rj" />
                    </OwnerProfileContainer>
                    <OwnerInfoContainer>
                        <OwnerInfoPrimary>
                            <OwnerName>チャイロ - Chairo</OwnerName>
                            <OwnerSubCount>99.6k subscribers</OwnerSubCount>
                        </OwnerInfoPrimary>
                        <OwnerInfoSecondary>
                            <SubscribeButton>subscribe</SubscribeButton>
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
                        The best time to apply for jobs is when you are not
                        ready. You should be looking for jobs in anticipation of
                        when you plan to start looking. Looking jobs before you
                        are ready makes a lot of sense because you will get to
                        test out the market before you are ready to hit your job
                        search full time. Free Download: Don Recommends the Top
                        10 Questions for you. Free Download: Don Recommends the
                        Top 10 Questions for you. Free Download: Don Recommends
                        the Top 10 Questions for you.
                    </ShowMoreText>
                </VideoDescriptionContainer>
            </VideoSecondaryInfo>
        </Wrapper>
    );
}
