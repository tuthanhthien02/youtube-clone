import styled from "styled-components/macro";

export const Wrapper = styled.div`
    display: flex;
    overflow-x: scroll;
    font-size: 0.8rem;
    padding: 0.5rem 0;

    &::-webkit-scrollbar {
        width: 0px;
    }
    scrollbar-width: none;
`;

export const Tag = styled.span`
    margin-right: 1rem;
    padding: 0.275rem 0.75rem;
    white-space: nowrap;
    border: 1px solid var(--text-color);
    border-radius: 999px;
    color: ${(props) => (props.active === "true" ? "#fff" : "")};
    background-color: ${(props) => (props.active === "true" ? "#606060" : "")};
    border-color: ${(props) =>
        props.active === "true" ? "var(--border-color)" : ""};

    &:hover {
        background-color: #374a59;
    }
`;
