import {
    Flexbox,
    PosterImg,
    StyledH1,
    StyledH2,
    StyledH3,
    StyledP,
    StyledTable,
    Textbox
} from "../../styles/ReusableStyles.tsx";
import {useEffect} from "react";
import cdsImg from "../../assets/cds.jpg";


export default function Education() {

    useEffect(() => {
        document.title = "Education | Resume"
    }, []);

    return (
        <>
            <StyledTable>
                <tr>
                    <td>
                        <StyledH1>My Education</StyledH1>
                    </td>
                </tr>
            </StyledTable>

            <Flexbox>
                <PosterImg src={cdsImg} alt={"boston university center for computing and data sciences"}/>

                <Textbox>
                    <StyledH2>Boston University <small>(9/2022 - 12/2026)</small></StyledH2>
                    <StyledH3>
                        B.A. in Computer Science <br/>
                        B.S. in Business Administration
                    </StyledH3>
                    <StyledP>
                        I came to BU from Vancouver, Canada because I wanted to explore.
                        Little did I know that it would become the best 4 years of my life.
                        I've met so many great friends and professors here, and am excited
                        to stay in Boston after graduation!
                    </StyledP>
                </Textbox>
            </Flexbox>
        </>
    );
}