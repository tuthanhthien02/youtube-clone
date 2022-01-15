import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideoByKeyword } from "../../features/searchedVideo/searchedVideoSlice";
import { Container } from "react-bootstrap";
import VideoHorizontal from "../../components/videoHorizontal";

export default function SearchScreen() {
    const dispatch = useDispatch();
    const { query } = useParams();

    const { videos, loading } = useSelector((state) => state.searchedVideo);

    useEffect(() => {
        dispatch(getVideoByKeyword(query));
    }, [dispatch, query]);

    return (
        <Container>
            <Helmet>
                <title>{query} - YouTube</title>
            </Helmet>
            {!loading ? (
                videos?.map((video) => (
                    <VideoHorizontal
                        video={video}
                        key={video.id.videoId}
                        searchScreen
                    />
                ))
            ) : (
                <h1>Loading..</h1>
            )}
        </Container>
    );
}
