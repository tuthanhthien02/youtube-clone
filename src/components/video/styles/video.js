import styled from "styled-components/macro";

export const Wrapper = styled.div`
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: 0.9rem;
    cursor: pointer;
`;

export const Thumbnail = styled.div`
    margin-bottom: 0.5rem;
    position: relative;

    img {
        width: 100%;
    }

    span {
        position: absolute;
        /* bottom: 0.3rem;
        right: 0.3rem; */
        bottom: 0;
        right: 0;
        margin: 4px;
        padding: 3px 4px;
        font-size: 11px;
        color: #fff;
        background: rgba(0, 0, 0, 0.8);
        border-radius: 2px;
    }
`;

export const Details = styled.div`
    display: flex;
    margin-top: 12px;
`;

export const Title = styled.div`
    display: -webkit-box;
    margin-bottom: 6px;
    font-size: 0.875rem;
    color: #fff;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`;

export const ChannelImage = styled.div`
    img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        margin-right: 0.8rem;
        cursor: pointer;
    }
`;

export const Description = styled.div``;

export const ChannelName = styled.h2`
    font-size: 0.775rem;
    color: #aaa;
    margin-bottom: 0;
`;

export const VideoStats = styled.div`
    color: #aaa;
`;

export const Views = styled.span`
    /* letter-spacing: 1px; */
    &::after {
        content: "•";
        margin: 4px;
    }
`;

export const Date = styled.span``;

export const Channel = styled.div`
    display: flex;
    align-items: center;
    margin: 0.5rem 0;

    p {
        margin-bottom: 0;
    }
`;
