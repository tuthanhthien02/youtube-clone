import styled from "styled-components/macro";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: ${(props) => props.col1} ${(props) => props.col2};
    column-gap: 8px;
    margin-top: 8px;
`;

export const VideoThumbnailContainer = styled.div`
    position: relative;
    cursor: pointer;

    .lazy-load-image-background {
        width: 100%;
    }

    img {
        width: 100%;
        height: 100%;
    }
`;

export const VideoThumbnail = styled.img``;

export const VideoDuration = styled.span`
    position: absolute;
    bottom: 2px;
    right: 4px;
    margin: 0px;
    padding: 3px 4px;
    font-size: 11px;
    color: #fff;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 2px;
`;

export const VideoInfoContainer = styled.div`
    cursor: pointer;
`;

export const VideoTitle = styled.a`
    display: -webkit-box;
    margin-top: 0;
    margin-bottom: 4px;
    cursor: pointer;

    color: #fff;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 0.3px;

    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    &:hover {
        color: #fff;
    }
`;

export const VideoOwnerName = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: rgb(170, 170, 170);
`;

export const VideoMetaData = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: rgb(170, 170, 170);
`;

export const VideoViews = styled.span`
    &::after {
        content: "•";
        margin: 4px;
    }
`;

export const VideoDate = styled.span``;
