import {
    Flexbox,
    StyledA,
    StyledH1,
    StyledH2,
    StyledH3,
    StyledP,
    StyledTable,
    Textbox, ThumbnailImg
} from "../../styles/ReusableStyles.tsx";
import idoriImg from "../../assets/idori.webp";
import pandaImg from "../../assets/panda.jpg";


export default function Experiences({setTitle}: {setTitle: (title: string) => void}) {
    setTitle("Experiences | Resume");

    return (
        <StyledTable>
            <tr>
                <td>
                    <StyledH1>My Work Experience</StyledH1>
                </td>
            </tr>

            <tr>
                <td>
                    <Flexbox>
                        <ThumbnailImg src={idoriImg} alt={"idori products"}/>

                        <Textbox>
                            <StyledH2>Idori LLC <small>&nbsp;(06/2023 - 12/2023)</small></StyledH2>
                            <StyledH3>Software Developer Intern</StyledH3>
                            <StyledP>
                                I interned at the startup company Idori LLC, and made a videogame that
                                teaches children about the importance of environmental sustainability. <br/>

                                <StyledA
                                    href="https://github.com/SeaPolecat/benjy-the-treehopper-unitygame"
                                    target="_blank"
                                >
                                    Github repo
                                </StyledA> <br/>

                                <StyledA
                                    href="https://play.unity.com/en/games/b1ee31bb-81ad-4bc6-b5bc-e37fb592a46e/treehopping-with-benjy"
                                    target="_blank"
                                >
                                    Playable demo
                                </StyledA>
                            </StyledP>
                        </Textbox>
                    </Flexbox>
                </td>
            </tr>

            <tr>
                <td>
                    <Flexbox>
                        <ThumbnailImg src={pandaImg} alt={"panda express at george sherman union"}/>

                        <Textbox>
                            <StyledH2>Panda Express <small>&nbsp;(01/2023 - 05/2023)</small></StyledH2>
                            <StyledH3>Customer Service Associate</StyledH3>
                            <StyledP>
                                I worked at the Panda Express in BU's George Sherman Union.
                                It was a fun and fast-paced job where I learned how to communicate
                                with customers and managers.
                            </StyledP>
                        </Textbox>
                    </Flexbox>
                </td>
            </tr>
        </StyledTable>
    );
}