import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`${css`
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");

    :root {
        --text-color: #b1bdb4;

        --black-primary: #15181b;
        --black-secondary: #121417;

        --border-color: #4c4c4c;
    }

    body {
        background: var(--black-primary);
        background-attachment: fixed;
        font-family: "Roboto", sans-serif;
        letter-spacing: 0.1px;
        color: var(--text-color);
    }
`}`;
