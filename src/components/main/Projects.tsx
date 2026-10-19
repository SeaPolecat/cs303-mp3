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
import Calculator from "./Calculator.tsx";
import gimmeCardsImg from "../../assets/gimmecards.png";
import blindboxImg from "../../assets/blindbox.png";
import unoImg from "../../assets/uno.png";
import machineImg from "../../assets/machine.jpg";


export default function Projects() {
    return (
        <StyledTable>
            <tr>
                <td>
                    <StyledH1>My Projects</StyledH1>
                </td>
            </tr>

            <tr>
                <td>
                    <Flexbox>
                        <ThumbnailImg src={gimmeCardsImg} alt={"gimme cards project"}/>
                        <Textbox>
                            <StyledH2>Gimme Cards</StyledH2>
                            <StyledH3>Full-Stack Java Chatbot</StyledH3>
                            <StyledP>
                                A Discord bot that lets you collect and trade virtual Pokémon cards.
                                Built with Java, hosted on Pebblehost. <br/>

                                <StyledA
                                    href="https://github.com/SeaPolecat/gimmecards-discord-bot"
                                    target="_blank"
                                >Github repo
                                </StyledA> <br/>
                                <StyledA
                                    href="https://www.gimmecards.ca/"
                                    target="_blank"
                                >Project website
                                </StyledA>
                            </StyledP>
                        </Textbox>
                    </Flexbox>
                </td>
            </tr>

            <tr>
                <td>
                    <Flexbox>
                        <ThumbnailImg src={blindboxImg} alt={"blindbox buddy project"}/>
                        <Textbox>
                            <StyledH2>Blindbox Buddy</StyledH2>
                            <StyledH3>Full-Stack Django Website</StyledH3>
                            <StyledP>
                                A website for artists to share and collect their artworks. Django
                                templates & CSS for frontend, Python for backend. <br/>

                                <StyledA
                                    href="https://github.com/SeaPolecat/blindbox-buddy-fullstack"
                                    target="_blank"
                                >Github repo
                                </StyledA> <br/>
                                <StyledA
                                    href="https://www.youtube.com/watch?v=7SdnyKaCl-A"
                                    target="_blank"
                                >Demo video
                                </StyledA>
                            </StyledP>
                        </Textbox>
                    </Flexbox>
                </td>
            </tr>

            <tr>
                <td>
                    <Flexbox>
                        <ThumbnailImg src={unoImg} alt={"MCTS agents project"}/>
                        <Textbox>
                            <StyledH2>Uno MCTS Agents</StyledH2>
                            <StyledH3>Intro to AI Class Project</StyledH3>
                            <StyledP>
                                AI agents that play Uno autonomously. Implemented with Minimax algorithm
                                and Monte Carlo Tree Simulations. <br/>

                                <StyledA
                                    href="https://github.com/SeaPolecat/uno-mcts-agents"
                                    target="_blank"
                                >Github repo
                                </StyledA>
                            </StyledP>
                        </Textbox>
                    </Flexbox>
                </td>
            </tr>

            <tr>
                <td>
                    <Flexbox>
                        <ThumbnailImg src={machineImg} alt={"machine project"}/>
                        <Textbox>
                            <StyledH2>machinE</StyledH2>
                            <StyledH3>game design contest</StyledH3>
                            <StyledP>
                                Puzzle platformer game built in Gamemaker. Won the $300 1st place
                                prize in the BU Game Design competition. <br/>

                                <StyledA
                                    href="https://www.youtube.com/watch?v=EsuuaDHkULU"
                                    target="_blank"
                                >Demo video
                                </StyledA>
                            </StyledP>
                        </Textbox>
                    </Flexbox>
                </td>
            </tr>

            <tr>
                <td>
                    <Calculator/>
                </td>
            </tr>
        </StyledTable>
    );
}