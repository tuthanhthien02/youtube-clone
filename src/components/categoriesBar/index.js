import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    setActiveElement,
    getActiveElement,
} from "../../features/categories/categoriesSlice";
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

    return (
        <Wrapper>
            {keywords.map((item, index) => (
                <Tag
                    onClick={() => dispatch(setActiveElement(item))}
                    key={index}
                    active={activeElement === item ? "true" : "false"}
                >
                    {item}
                </Tag>
            ))}
        </Wrapper>
    );
}
