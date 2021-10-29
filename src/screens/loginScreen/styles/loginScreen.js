import styled from "styled-components/macro";

export const Wrapper = styled.div`
    display: grid;
    height: 100vh;
    place-items: center;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    margin: 0 1rem;
    border-radius: 10px;
    background-color: var(--black-secondary);

    h1 {
        margin-bottom: 0;
    }

    button {
        padding: 0.5rem;
        margin-bottom: 1rem;
        border-radius: 5px;
        border: none;
        &:focus {
            outline: none;
        }
    }
`;

export const Logo = styled.img`
    width: 230px;
    height: 155px;
    object-fit: contain;
`;
