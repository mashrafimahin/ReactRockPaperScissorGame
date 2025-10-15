import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        margin: 0; padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: lightseagreen;
        min-height: 100dvh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default Global;
