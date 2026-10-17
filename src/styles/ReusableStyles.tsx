import styled from "styled-components";


/* flex div that flexes its items in a row for desktop, column for mobile */
export const Flexbox = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 750px) {
        flex-direction: column;
        align-items: center;
    }
`;

/* div that contains mainly text */
export const Textbox = styled.div`
    padding: /*10px*/0.66vw /*20px*/1.32vw;

    @media screen and (max-width: 750px) {
        width: 100%;
        margin-bottom: /*30px*/1.98vw;
        padding: 0;
    }
`;

export const StyledTable = styled.table`
    width: 100%;

    td {
        padding-bottom: /*30px*/1.98vw;
    }
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

    @media screen and (max-width: 750px) {
        width: 60%;
    }
`;

/* makes items conform to a horizontal thumbnail-like size */
export const ThumbnailImg = styled.img`
    object-fit: cover;
    aspect-ratio: 16 / 9;
    width: 50%;
    height: auto;

    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

export const StyledInput = styled.input`
    font-size: calc(5px + 1vw);
    width: 45%;
    height: /*50px*/3.29vw;
`;

export const StyledButton = styled.button`
    background-color: pink;
    border: solid /*2px*/0.13vw deeppink;
    font-size: calc(5px + 1vw);
    width: 15%;
    height: 15%;
    margin: /*20px*/1.32vw 0;
    border-radius: /*30px*/1.97vw;
    
    :hover {
        background-color: white;
    }
`;