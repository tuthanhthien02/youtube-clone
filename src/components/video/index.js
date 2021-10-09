import React from "react";
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
import { AiFillEye } from "react-icons/ai";

export default function Video() {
    return (
        <Wrapper>
            <Thumbnail>
                <img
                    src="https://i.ytimg.com/vi/GMyF41IxReo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8Jc1pP7SQpVNofi6ujtS1jJI07w"
                    alt=""
                />
                <span>05:30</span>
            </Thumbnail>
            <Details>
                <ChannelImage>
                    <img
                        src="https://yt3.ggpht.com/ytc/AKedOLS9yQ2dF63KMBnr4oB6o6vtYLlY2ehfaumZi-m6vg=s88-c-k-c0x00ffffff-no-rj"
                        alt=""
                    />
                </ChannelImage>
                <Description>
                    <Title>Video's title</Title>
                    <ChannelName>VTV24</ChannelName>
                    <VideoStats>
                        <Views>5m Views</Views>
                        <Date>5 days ago</Date>
                    </VideoStats>
                </Description>
            </Details>
            {/* <Title>
                <h3>Fully Functional YouTube Clone</h3>
            </Title>
            <Details>
                <span>
                    <AiFillEye /> 5m Views •
                </span>
                <span>5 days ago</span>
            </Details>
            <Channel>
                <img
                    src="https://yt3.ggpht.com/ytc/AKedOLS9yQ2dF63KMBnr4oB6o6vtYLlY2ehfaumZi-m6vg=s88-c-k-c0x00ffffff-no-rj"
                    alt=""
                />
                <p>Lẩm Bẩm 24H</p>
            </Channel> */}
        </Wrapper>
    );
}
