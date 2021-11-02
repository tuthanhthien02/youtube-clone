import React from "react";
import { Player } from "./styles/videoPlayer";

export default function VideoPlayer({ src }) {
    return (
        <Player>
            <iframe
                src={src}
                frameBorder="0"
                title="test"
                allowFullScreen
                width="100%"
                height="100%"
            ></iframe>
        </Player>
    );
}
