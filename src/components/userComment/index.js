import React from "react";
import moment from "moment";
import {
    Wrapper,
    UserProfileContainer,
    UserProfile,
    UserInfoContainer,
    Username,
    DateComment,
    CommentContentText,
    CommentText,
} from "./styles/userComment";

export default function UserComment({ comment }) {
    const {
        authorDisplayName,
        authorProfileImageUrl,
        publishedAt,
        textDisplay,
    } = comment;

    return (
        <Wrapper>
            <UserProfileContainer>
                {/* <UserProfile src="https://yt3.ggpht.com/ytc/AKedOLTPK2KYDiQi9fswCNOs_vl80Lo1_NAvSD8rBhV29w=s48-c-k-c0x00ffffff-no-rj" /> */}
                <UserProfile src={authorProfileImageUrl} />
            </UserProfileContainer>

            <CommentContentText>
                <UserInfoContainer>
                    <Username>{authorDisplayName}</Username>
                    <DateComment>{moment(publishedAt).fromNow()}</DateComment>
                </UserInfoContainer>
                <CommentText>{textDisplay}</CommentText>
            </CommentContentText>
        </Wrapper>
    );
}
