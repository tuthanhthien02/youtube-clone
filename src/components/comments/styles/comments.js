import styled from "styled-components/macro";

export const Wrapper = styled.div``;

export const CommentInfoContainer = styled.div``;

export const CommentInfoPrimary = styled.div``;

export const CommentInfoSecondary = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
`;

export const ButtonSort = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: transparent;
    border: none;

    color: #fff;
    text-transform: uppercase;

    font-size: 15px;
    font-weight: 500;
`;

export const ButtonSortIcon = styled.span`
    display: inline-block;
    margin-right: 5px;
    font-size: 20px;
`;

export const CommentCount = styled.span`
    margin-right: 32px;
    font-size: 17px;
    font-weight: 500;
    color: #fff;
`;

export const CommentBoxContainer = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    margin-bottom: 32px;
`;

export const UserProfileContainer = styled.div`
    margin-right: 16px;
    max-width: 40px;
    max-height: 40px;
`;

export const UserProfile = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 100rem;
`;

export const CommentBox = styled.div``;

export const CommentForm = styled.form`
    display: flex;
    flex-direction: column;

    input {
        padding-bottom: 3px;
        margin-bottom: 8px;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        color: #fff;
        outline: none;
    }

    input::-webkit-input-placeholder {
        font-size: 13px;
        color: rgb(170, 170, 170);
    }
`;

export const CommentButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`;

export const CancelCommentButton = styled.button`
    padding: 10px 16px;
    color: rgb(170, 170, 170);
    font-size: 14px;
    font-weight: 500;
    border: none;
    border-radius: 2px;
    text-transform: uppercase;
    background-color: transparent;
`;

export const CommentButton = styled.button`
    padding: 10px 16px;
    color: rgb(113, 113, 113);
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 2px;
    text-transform: uppercase;
    background-color: rgba(255, 255, 255, 0.1);
`;
