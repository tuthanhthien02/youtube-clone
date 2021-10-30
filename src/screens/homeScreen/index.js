import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import {
    getPopularVideos,
    getVideoByCategory,
} from "../../features/video/videoSlice";
import { Container, Row, Col } from "react-bootstrap";
import CategoriesBar from "../../components/categoriesBar";
import Video from "../../components/video";

export default function HomeScreen() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularVideos());
    }, [dispatch]);

    const { videos, activeCategory } = useSelector((state) => state.video);

    const fetchData = () => {
        if (activeCategory === "All") {
            dispatch(getPopularVideos());
        } else {
            dispatch(getVideoByCategory(activeCategory));
        }
    };

    return (
        <div>
            <Container>
                <CategoriesBar />
                <InfiniteScroll
                    className="row"
                    dataLength={videos.length}
                    next={fetchData}
                    hasMore={true}
                    loader={
                        <div className="spinner-border text-danger d-block mx-auto"></div>
                    }
                    style={{ overflowY: "hidden" }}
                >
                    {videos.map((video) => (
                        <Col lg={3} md={4} sm={6} key={video.id}>
                            <Video video={video} />
                        </Col>
                    ))}
                </InfiniteScroll>
            </Container>
        </div>
    );
}
