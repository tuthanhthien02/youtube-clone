import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    setActiveElement,
    getActiveElement,
} from "../../features/categories/categoriesSlice";
import { getVideoByCategory } from "../../features/video/videoSlice";
import { Wrapper, Tag } from "./styles/categoriesBar";

const keywords = [
    "All",
    "React js",
    "Angular js",
    "React Native",
    "use of API",
    "Redux",
    "Music",
    "Algorithm Art ",
    "Guitar",
    "Bengali Songs",
    "Coding",
    "Cricket",
    "Football",
    "Real Madrid",
    "Gatsby",
    "Poor Coder",
    "Shwetabh",
];

export default function CategoriesBar() {
    const dispatch = useDispatch();
    const activeElement = useSelector(getActiveElement);

    const handleClick = (keyword) => {
        dispatch(setActiveElement(keyword));
        dispatch(getVideoByCategory(keyword));
    };

    return (
        <Wrapper>
            {keywords.map((keyword, index) => (
                <Tag
                    onClick={() => handleClick(keyword)}
                    key={index}
                    active={activeElement === keyword ? "true" : "false"}
                >
                    {keyword}
                </Tag>
            ))}
        </Wrapper>
    );
}
