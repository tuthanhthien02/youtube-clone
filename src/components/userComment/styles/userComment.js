import styled from "styled-components/macro";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
`;

export const UserProfileContainer = styled.div`
    max-width: 40px;
    max-height: 40px;
    margin-right: 16px;
`;

export const UserProfile = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 100rem;
`;

export const UserInfoContainer = styled.div``;

export const Username = styled.a`
    display: inline-block;
    margin-right: 4px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #fff;
    }
`;

export const DateComment = styled.a`
    display: inline-block;
    font-size: 12px;
    font-weight: 400;
    text-decoration: none;
    color: rgb(170, 170, 170);
    cursor: pointer;

    &:hover {
        color: #fff;
    }
`;

export const CommentContentText = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-right: 1rem;
`;

export const CommentText = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #fff;
`;
