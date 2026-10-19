import {Flexbox, PosterImg, StyledH2, StyledP, StyledTable, Textbox} from "../../styles/ReusableStyles.tsx";
import {useEffect} from "react";
import styled from "styled-components";
import meImg from "../../assets/me.png";
import sharkImg from "../../assets/shark.jpeg";
import eelsImg from "../../assets/eels.jpeg";


const AquariumImg = styled.img`
    width: /*220px*/14.55vw;
    margin-top: /*40px*/2.65vw;
`;


export default function Home() {

    useEffect(() => {
        document.title = "Home | Resume"
    }, []);

    return (
        <StyledTable>
            <tr>
                <td>
                    <Flexbox>
                        <PosterImg src={meImg} alt={"yi ji wang"}/>

                        <Textbox>
                            <StyledH2>About Me</StyledH2>

                            <StyledP>
                                Hi! I'm Wayne, a senior at Boston University studying Computer Science
                                and Business (graduating Dec. 2026). I like to design cool software,
                                especially games and websites. <br/><br/>

                                I'm currently looking for full-time software engineering roles in
                                Boston, MA. <br/><br/>

                                In my free time, I often draw and visit aquariums.
                            </StyledP>

                            <AquariumImg src={sharkImg} alt={"shark"}/>
                            <AquariumImg src={eelsImg} alt={"eels"}/>
                        </Textbox>
                    </Flexbox>
                </td>
            </tr>
        </StyledTable>
    );
}