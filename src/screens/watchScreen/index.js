import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideoById } from "../../features/selectedVideo/selectedVideoSlice";
import { getRelatedVideos } from "../../features/relatedVideo/relatedVideoSlice";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import VideoPlayer from "../../components/videoPlayer";
import VideoMetaData from "../../components/videoMetaData";
import Comments from "../../components/comments";
import VideoHorizontal from "../../components/videoHorizontal";

export default function WatchScreen() {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getVideoById(id));
        dispatch(getRelatedVideos(id));
    }, [dispatch, id]);

    const { video, loading } = useSelector((state) => state.selectedVideo);
    const { videos, loading: relatedVideoLoading } = useSelector(
        (state) => state.relatedVideo
    );

    const renderVideoMetaData = () => {
        if (!loading && video !== null) {
            return <VideoMetaData video={video} videoId={id} />;
        }

        return (
            <h1>
                Loading... Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Repellendus incidunt exercitationem veritatis ducimus
                doloremque deleniti consequuntur eius accusantium ratione sed.
            </h1>
        );
    };

    return (
        <Row>
            <Col lg={8}>
                <VideoPlayer
                    src={`https://www.youtube.com/embed/${id}`}
                    frameBorder="0"
                    title={video?.snippet?.title}
                />

                {renderVideoMetaData()}

                <Comments videoId={id} />
            </Col>
            <Col lg={4}>
                {!loading ? (
                    videos
                        .filter((video) => video.snippet)
                        ?.map((video) => (
                            <VideoHorizontal
                                video={video}
                                key={video.id.videoId}
                            />
                        ))
                ) : (
                    <SkeletonTheme baseColor="#343a40" highlightColor="#3c4147">
                        <Skeleton width="100%" height="130px" count={15} />
                    </SkeletonTheme>
                )}
            </Col>
        </Row>
    );
}
