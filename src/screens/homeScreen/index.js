import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "react-loading-skeleton";
import {
    getPopularVideos,
    getVideoByCategory,
} from "../../features/video/videoSlice";
import { Container, Row, Col } from "react-bootstrap";
import CategoriesBar from "../../components/categoriesBar";
import Video from "../../components/video";
import SkeletonVideo from "../../components/skeletons";
import "react-loading-skeleton/dist/skeleton.css";

export default function HomeScreen() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularVideos());
    }, [dispatch]);

    const { loading, videos, activeCategory } = useSelector(
        (state) => state.video
    );

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
                    {!loading
                        ? videos.map((video) => {
                              const _videoId = video.id.videoId
                                  ? video.id.videoId
                                  : video.id;
                              return (
                                  <Col lg={3} md={4} sm={6} key={_videoId}>
                                      <Video video={video} />
                                  </Col>
                              );
                          })
                        : [...Array(20)].map((value, index) => (
                              <Col lg={3} md={4} sm={6} key={index}>
                                  <SkeletonVideo />
                              </Col>
                          ))}
                </InfiniteScroll>
            </Container>
        </div>
    );
}
