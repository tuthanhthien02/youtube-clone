import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../../features/video/videoSlice";
import { Container, Row, Col } from "react-bootstrap";
import CategoriesBar from "../../components/categoriesBar";
import Video from "../../components/video";

export default function HomeScreen() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularVideos());
    }, [dispatch]);

    const videos = useSelector((state) => state.video.videos);

    return (
        <div>
            <Container>
                <CategoriesBar />
                <Row>
                    {videos.map((video) => (
                        <Col lg={3} md={4} sm={6} key={video.id}>
                            <Video video={video} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
