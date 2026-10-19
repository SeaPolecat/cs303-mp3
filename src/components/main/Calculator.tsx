import {
    Flexbox,
    StyledButton,
    StyledH2,
    StyledH3,
    StyledInput,
    StyledP,
    Textbox
} from "../../styles/ReusableStyles.tsx";
import {useState} from "react";
import styled from "styled-components";


const CalculatorDiv = styled.div`
    aspect-ratio: 16 / 9;
    color: deeppink;
    text-align: center;
    background-color: #ffd9de;
    width: 100%;
    padding-top: /*70px*/4.61vw;
`;

const AnswerSpan = styled.span`
    &.black {
        color: black;
    }

    &.red {
        color: red;
    }
`;


export default function Calculator() {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [answer, setAnswer] = useState("");
    const [isRed, setIsRed] = useState(false);

    function showAnswer(ans: number) {
        if (ans < 0 || isNaN(ans))
            setIsRed(true);
        else
            setIsRed(false);

        setAnswer(String(ans));
    }

    function addNumbers() {
        showAnswer(Number(input1) + Number(input2));
    }

    function subtract() {
        showAnswer(Number(input1) - Number(input2));
    }

    function multiply() {
        showAnswer(Number(input1) * Number(input2));
    }

    function divide() {
        showAnswer(Number(input1) / Number(input2));
    }

    function exponentiate() {
        const n1 = Number(input1);
        const n2 = Number(input2);
        let ans = 1;

        for (let i = 0; i < Math.abs(n2); i++)
            ans *= n1;

        if (n2 < 0)
            ans = 1 / ans

        showAnswer(ans);
    }

    function clearAnswer() {
        setInput1("");
        setInput2("");
        setAnswer("");
    }

    return (
        <Flexbox>
            <CalculatorDiv>
                <StyledH2>Bubblegum Calculator</StyledH2>

                <StyledInput
                    type={"string"}
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                />
                <StyledInput
                    type={"string"}
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                />

                <StyledButton onClick={addNumbers}>+</StyledButton>
                <StyledButton onClick={subtract}>-</StyledButton>
                <StyledButton onClick={multiply}>*</StyledButton>
                <StyledButton onClick={divide}>/</StyledButton>
                <StyledButton onClick={exponentiate}>**</StyledButton>
                <StyledButton onClick={clearAnswer}>Clear</StyledButton>

                <StyledH3>
                    <AnswerSpan className={isRed ? 'red' : 'black'}>
                        {answer ? `Answer: ${answer}` : ''}
                    </AnswerSpan>
                </StyledH3>
            </CalculatorDiv>
            <Textbox>
                <StyledH3>CS303 MP1 Project</StyledH3>
                <StyledP>
                    A simple web calculator built with Javascript. <br/><br/>
                    Try it out!
                </StyledP>
            </Textbox>
        </Flexbox>
    )
}