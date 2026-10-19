import {StyledH1, StyledH2, StyledTable} from "../../styles/ReusableStyles.tsx";
import styled from "styled-components";
import {useEffect} from "react";
import resume from "../../assets/resume.pdf";
import psm from "../../assets/resume.pdf";


const ResumeIframe = styled.iframe`
    aspect-ratio: 16 / 20;
    width: 100%;
`;

const PsmIframe = styled.iframe`
    aspect-ratio: 16 / 14;
    width: 100%;
`;


export default function Documents() {

    useEffect(() => {
        document.title = "Documents | Resume"
    }, []);

    return (
        <StyledTable>
            <tr><td>
                <StyledH1>My Documents</StyledH1>
            </td></tr>

            <tr><td>
                <StyledH2>Resume</StyledH2>
                <ResumeIframe src={resume}/>
            </td></tr>

            <tr><td>
                <StyledH2>Professional Scrum Master&trade; I Certificate</StyledH2>
                <PsmIframe src={psm}/>
            </td></tr>
        </StyledTable>
    );
}