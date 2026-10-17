import {StyledH1, StyledH2, StyledTable} from "../styles/GeneralStyles.tsx";


export default function Documents() {
    return (
        <StyledTable>
            <tr><td>
                <StyledH1>My Documents</StyledH1>
            </td></tr>

            <tr><td>
                <StyledH2>Resume</StyledH2>
                <iframe id="resume" src="static/pdf/resume.pdf"></iframe>
            </td></tr>

            <tr><td>
                <StyledH2>Professional Scrum Master&trade; I Certificate</StyledH2>
                <iframe id="psm" src="static/pdf/psm.pdf"></iframe>
            </td></tr>
        </StyledTable>
    )
}