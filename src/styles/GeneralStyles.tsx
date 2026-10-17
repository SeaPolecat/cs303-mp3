/* importing fonts */
// @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: Rubik, Arial, Verdana, sans-serif;
        font-weight: 450;
        margin: 0;
        padding: 0;
    }

    body {
        background: #abd1e6;
    }
`;
export default GlobalStyle;

export const StyledHeader = styled.header`
    width: 80vw;
    margin: /*30px*/1.98vw auto;
`;

/* wraps around nav and main */
export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 80vw;
    min-height: 100vh;
    margin: auto;
`;

export const StyledNav = styled.nav`
    background-color: darkcyan;
    width: 15%; /* of wrapper div */
    padding-bottom: /*10px*/0.66vw;
    border-radius: /*30px*/1.98vw 0 0 /*30px*/1.98vw;

    li {
        list-style: none;
        text-align: left;
        margin: /*20px*/1.32vw 0;
        padding: 0 /*20px*/1.32vw;
    }

    a {
        color: white;
        text-decoration: none;
        transition: 0.2s;
        font-size: calc(5px + 1vw);
    }
    
    a:hover {
        color: black;
    }
`;

/* flex div that flexes its items in a row for desktop, column for mobile */
export const Flexbox = styled.div`
    display: flex;
    flex-direction: row;
`;

/* div that contains mainly text */
export const Textbox = styled.div`
    padding: /*10px*/0.66vw /*20px*/1.32vw;
`;

export const StyledTable = styled.table`
    width: 100%;

    td {
        padding-bottom: /*30px*/1.98vw;
    }
`;

export const StyledFooter = styled.footer`
    width: 80vw;
    margin: /*30px*/1.98vw auto;
`;

export const StyledH1 = styled.h1`
    text-decoration: underline;
    font-size: calc(20px + 1vw);
`;

export const StyledH2 = styled.h2`
    font-size: calc(15px + 1vw);
    margin-bottom: /*20px*/1.32vw;
`;

export const StyledH3 = styled.h3`
    font-size: calc(10px + 1vw);
    margin-bottom: /*20px*/1.32vw;
`;

export const StyledP = styled.p`
    font-size: calc(5px + 1vw);
`;

export const StyledA = styled.a`
    color: deepskyblue;
`;

/* makes items conform to a vertical poster size */
export const PosterImg = styled.img`
    object-fit: cover;
    width: 45%;
`;

/* makes items conform to a horizontal thumbnail-like size */
export const ThumbnailImg = styled.img`
    object-fit: cover;
    aspect-ratio: 16 / 9;
    width: 50%;
    height: auto;
`;

/* documents page */

iframe#resume {
    aspect-ratio: 16 / 20;
    width: 100%;
}

iframe#psm {
    aspect-ratio: 16 / 14;
    width: 100%;
}

/* projects page */

div.calculator {
    color: deeppink;
    text-align: center;
    background-color: #ffd9de;
    width: 100%;
    padding-top: /*70px*/4.61vw;
}

input {
    font-size: calc(5px + 1vw);
    width: 45%;
    height: /*50px*/3.29vw;
}

button {
    background-color: pink;
    border: solid /*2px*/0.13vw deeppink;
    font-size: calc(5px + 1vw);
    width: 15%;
    height: 15%;
    margin: /*20px*/1.32vw 0;
    border-radius: /*30px*/1.97vw;
}

button:hover {
    background-color: white;
}


@media screen and (max-width: 750px) {

    header {
        text-align: center;
        width: 90vw;
    }

    div.wrapper {
        flex-direction: column;
        width: 90vw;
    }

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 7vh;
        border-radius: /*30px*/1.98vw /*30px*/1.98vw 0 0;
    }

    nav li {
        display: inline;
        padding: /*5px*/0.33vw;
    }

    nav a {
        color: #434343;
        background-color: lightblue;
        font-size: calc(8px + 1vw);
        padding: /*8px*/0.53vw /*10px*/0.66vw;
        border-radius: /*10px*/0.66vw;
    }

    nav a:hover {
        color: white;
    }

    main {
        width: 100%;
        min-height: 100vh;
    }

    div.flexbox {
        flex-direction: column;
        align-items: center;
    }

    div.textbox {
        width: 100%;
        margin-bottom: /*30px*/1.98vw;
        padding: 0;
    }

    img {
        margin-bottom: /*20px*/1.32vw;
    }

    img.poster-size {
        width: 60%;
    }

    img.thumbnail-size {
        width: 100%;
    }
}