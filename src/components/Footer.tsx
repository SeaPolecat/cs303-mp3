import styled from "styled-components";
import {StyledA, StyledP} from "../styles/ReusableStyles.tsx";


const StyledFooter = styled.footer`
    width: 80vw;
    margin: /*30px*/1.98vw auto;
`;


export default function Footer() {
    return (
        <StyledFooter>
            <StyledP>All rights reserved by Yi Ji Wang. <StyledA href="">Credits</StyledA> &copy;</StyledP>
        </StyledFooter>
    );
}