import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function SkeletonVideo() {
    return (
        <div
            style={{
                width: "100%",
                margin: "1rem 0",
            }}
        >
            <SkeletonTheme baseColor="#343a40" highlightColor="#3c4147">
                <Skeleton height={180} />
                <div style={{ display: "flex", margin: "0.5rem" }}>
                    <Skeleton
                        style={{ marginRight: "0.5rem" }}
                        circle
                        height={40}
                        width={40}
                    />
                    <Skeleton
                        containerClassName="flex-grow-1"
                        height={40}
                        width="100%"
                    />
                </div>
            </SkeletonTheme>
        </div>
    );
}
