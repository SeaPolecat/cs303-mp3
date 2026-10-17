import {Flexbox, StyledH1, StyledH2, StyledP, StyledTable, Textbox, ThumbnailImg} from "../../styles/ReusableStyles.tsx";
import bgcMurderImg from "../../assets/bgc-murder.png";
import bgcTriviaImg from "../../assets/bgc-trivia.png";
import bgcDuosImg from "../../assets/bgc-duos.png";


export default function Leadership({setTitle}: {setTitle: (title: string) => void}) {
    setTitle("Leadership | Resume");

    return (
        <StyledTable>
            <tr>
                <td>
                    <StyledH1>My Leadership Experience</StyledH1>
                </td>
            </tr>

            <tr>
                <td>
                    <StyledH2>BU Board Games Club <small>(10/2023 - 12/2025)</small></StyledH2>
                    <StyledP>
                        I served as the Secretary for Boston University's Board Games Club. My main role
                        was to scout and book rooms for events, but I also helped in event planning (and acting!).
                        <br/><br/>

                        These are some of our main events:
                    </StyledP>
                </td>
            </tr>

            <tr>
                <td>
                    <Flexbox>
                        <ThumbnailImg src={bgcMurderImg} alt={"murder mystery photo"}/>
                        <Textbox>
                            <StyledH2>Murder Mystery</StyledH2>
                            <StyledP>
                                Audience members enjoy dinner and a watch a murder mystery play. As the
                                scenes unfold, they must gather clues from handmade puzzles to figure
                                out who's the murderer!
                            </StyledP>
                        </Textbox>
                    </Flexbox>
                </td>
            </tr>

            <tr>
                <td>
                    <Flexbox>
                        <ThumbnailImg src={bgcTriviaImg} alt={"trivia night photo"}/>
                        <Textbox>
                            <StyledH2>Trivia Night</StyledH2>
                            <StyledP>
                                Teams of 3-10 answer live trivia questions, with topics ranging
                                from "who's that silhouette?" to "guess the song from this guitar cover."
                            </StyledP>
                        </Textbox>
                    </Flexbox>
                </td>
            </tr>

            <tr>
                <td>
                    <Flexbox>
                        <ThumbnailImg src={bgcDuosImg} alt={"duos night photo"}/>
                        <Textbox>
                            <StyledH2>Duos Night</StyledH2>
                            <StyledP>
                                Annual Valentine's Day event where people form pairs and play 2-player
                                board games. Bring a friend, or maybe find a special someone along the way.
                            </StyledP>
                        </Textbox>
                    </Flexbox>
                </td>
            </tr>
        </StyledTable>
    );
}