import React, { useEffect, useState } from "react";
import numeral from "numeral";
import { useDispatch, useSelector } from "react-redux";
import { MdSort } from "react-icons/md";
import UserComment from "../userComment";
import {
    getCommentsOfVideoById,
    addComment,
} from "../../features/comments/commentsSlice";
import {
    Wrapper,
    CommentInfoContainer,
    CommentInfoPrimary,
    CommentInfoSecondary,
    ButtonSort,
    CommentCount,
    CommentBoxContainer,
    UserProfileContainer,
    UserProfile,
    CommentBox,
    CommentForm,
    CommentButtonContainer,
    CancelCommentButton,
    CommentButton,
    ButtonSortIcon,
} from "./styles/comments";

export default function Comments({ videoId }) {
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    useEffect(() => {
        dispatch(getCommentsOfVideoById(videoId));
    }, [dispatch, videoId]);

    const accessToken = useSelector((state) => state.auth.accessToken);
    const user = useSelector((state) => state.auth.user);
    const comments = useSelector((state) => state.comments.comments);
    const commentCount = useSelector(
        (state) => state.selectedVideo?.video?.statistics?.commentCount
    );

    const _comments = comments?.map(
        (comment) => comment.snippet.topLevelComment.snippet
    );

    const handleAddComment = (e) => {
        e.preventDefault();
        if (text.length === 0) return;

        dispatch(addComment(videoId, text));
        // dispatch(getCommentsOfVideoById(videoId));
        setText("");
    };

    return (
        <Wrapper>
            <CommentInfoContainer>
                <CommentInfoSecondary>
                    <CommentCount>
                        {numeral(commentCount).format("0,0")} Comments
                    </CommentCount>
                    <ButtonSort>
                        <ButtonSortIcon>
                            <MdSort />
                        </ButtonSortIcon>
                        <span>Sort by</span>
                    </ButtonSort>
                </CommentInfoSecondary>

                <CommentBoxContainer>
                    <UserProfileContainer>
                        <UserProfile src={user.photoURL} />
                    </UserProfileContainer>
                    <CommentBox>
                        <CommentForm onSubmit={handleAddComment}>
                            <input
                                type="text"
                                placeholder="Add a public comment..."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                            <CommentButtonContainer>
                                <CancelCommentButton>
                                    Cancel
                                </CancelCommentButton>
                                <CommentButton>Comment</CommentButton>
                            </CommentButtonContainer>
                        </CommentForm>
                    </CommentBox>
                </CommentBoxContainer>

                <CommentInfoPrimary>
                    {_comments?.map((comment, index) => (
                        <UserComment comment={comment} key={index} />
                    ))}
                </CommentInfoPrimary>
            </CommentInfoContainer>
        </Wrapper>
    );
}
