import styled from "styled-components/macro";

export const Wrapper = styled.div`
    padding-top: 1.25rem;
    padding-bottom: 24px;
    margin-bottom: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const VideoPrimaryInfo = styled.div``;

export const VideoPrimaryInfoDetail = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;

    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const VideoSecondaryInfo = styled.div`
    padding-top: 16px;
`;

export const VideoTitle = styled.h1`
    margin-bottom: 0.5rem;

    color: #fff;

    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
`;

export const VideoViews = styled.span`
    font-size: 14px;

    &::after {
        content: "•";
        margin: 4px;
    }
`;

export const VideoDate = styled.span`
    font-size: 14px;
`;

export const VideoReactions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & > div {
        position: relative;
        display: flex;
        flex-direction: row;
    }
`;

export const VideoButtonWrapper = styled.div`
    padding-right: 6px;
`;

export const VideoLikeButton = styled.button``;

export const VideoDislikeLikeButton = styled.button``;

export const VideoButtonAction = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;

    color: #fff;
    background-color: transparent;
    border: none;

    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;

    &:first-child > span {
        display: inline-block;
        margin-right: 5px;
    }
`;

export const ProgressLikeBar = styled.div`
    position: absolute;
    left: 0;
    bottom: -11px;

    width: 95%;
    height: 2px;

    background-color: #717171;
    z-index: 20;

    &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;

        width: ${(props) => (props.width ? `${props.width}%` : "0%")};
        height: 100%;

        background-color: #fff;
        z-index: 40;
    }
`;

export const VideoOwner = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
`;

export const OwnerProfileContainer = styled.div`
    margin-right: 16px;
    max-width: 48px;
    max-height: 48px;
`;

export const OwnerProfile = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 100rem;
`;

export const OwnerInfoContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
`;

export const OwnerInfoPrimary = styled.div`
    display: flex;
    flex-direction: column;
`;

export const OwnerInfoSecondary = styled.div``;

export const OwnerName = styled.a`
    font: 14px;
    color: #fff;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: #fff;
    }
`;

export const OwnerSubCount = styled.span`
    font-size: 13px;
    color: rgb(170, 170, 170);
    font-weight: 400;
`;

export const SubscribeButton = styled.button`
    justify-self: flex-end;
    padding: 10px 16px;
    margin: 0 4px;
    border-radius: 2px;
    border: none;
    background-color: ${(props) =>
        props.isSubscribed ? "rgba(255, 255, 255, 0.1)" : "rgb(204, 0, 0)"};
    color: ${(props) => (props.isSubscribed ? "#aaa" : "#fff")};
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
`;

export const VideoDescriptionContainer = styled.div`
    color: #fff;
    font-size: 14px;
    margin-left: 64px;
    overflow-wrap: break-word;
    white-space: pre-wrap;

    .showMoreText {
        display: block;
        margin-top: 8px;

        text-decoration: none;
        color: rgb(170, 170, 170);

        font-weight: 700;
        font-size: 13px;
    }
`;

export const VideoDescription = styled.div``;
