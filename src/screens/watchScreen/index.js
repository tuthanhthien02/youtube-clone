import React from "react";
import { Row, Col } from "react-bootstrap";
import VideoPlayer from "../../components/videoPlayer";
import VideoMetaData from "../../components/videoMetaData";
import Comments from "../../components/comments";
import VideoHorizontal from "../../components/videoHorizontal";

export default function WatchScreen() {
    return (
        <Row>
            <Col lg={8}>
                <VideoPlayer src="https://www.youtube.com/embed/tgbNymZ7vqY" />
                <VideoMetaData />
                <Comments />
            </Col>
            <Col lg={4}>
                {[...Array(10)].map(() => (
                    <VideoHorizontal />
                ))}
            </Col>
        </Row>
    );
}
