import styled from "styled-components";
import {StyledH1, StyledP} from "../styles/ReusableStyles.tsx";


const StyledHeader = styled.header`
    width: 80vw;
    margin: /*30px*/1.98vw auto;

    @media screen and (max-width: 750px) {
        text-align: center;
        width: 90vw;
    }
`;


export default function Header() {
    return (
        <StyledHeader>
            <StyledH1>Yi Ji (Wayne) Wang</StyledH1>
            <StyledP>Personal Website</StyledP>
        </StyledHeader>
    );
}