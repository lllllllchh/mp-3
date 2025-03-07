import { useState } from "react";
import styled from "styled-components";

const CalculatorContainer = styled.div`
    width: 80%;
    margin: 20px auto;
    padding: 30px;
    background-color: #F7F6F5;
    border-radius: 10px;
    text-align: center;
`;

const InputGroup = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 15px;
`;

const StyledInput = styled.input`
    padding: 10px;
    width: 40%;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: calc(12px + 0.5vw);
    text-align: center;
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-bottom: 15px;
`;

const StyledButton = styled.button`
    padding: 10px 15px;
    background-color: #A67C52;
    border: none;
    color: white;
    font-size: calc(12px + 0.3vw);
    border-radius: 5px;
    cursor: pointer;
`;

const ClearButton = styled(StyledButton)`
    background-color: #7D5A50;
`;

const StyledOutput = styled.h1<{$isRed:boolean}>`
    font-size: calc(14px + 0.5vw);
    margin-top: 15px;
    color: ${(props) => (props.$isRed ? "red" : "black")};
`;

export default function Calculator() {
    const [num1, setNum1] = useState<string>("");
    const [num2, setNum2] = useState<string>("");
    const [result, setResult] = useState<string>("");
    const [isRed, setIsRed] = useState(false);

    const getValues = () => ({
        num1: Number(num1),
        num2: Number(num2),
    });

    const displayResult = (value: number | string) => {
        setResult(String(value));
        const numericResult = Number(value);
        setIsRed(!isNaN(numericResult) && numericResult < 0);
    };

    const addition = () => {
        const { num1, num2 } = getValues();
        displayResult(num1 + num2);
    };

    const subtraction = () => {
        const { num1, num2 } = getValues();
        displayResult(num1 - num2);
    };

    const multiplication = () => {
        const { num1, num2 } = getValues();
        displayResult(num1 * num2);
    };

    const division = () => {
        const { num1, num2 } = getValues();
        if (num2 === 0) {
            displayResult("Error: Division by zero");
        } else {
            displayResult(num1 / num2);
        }
    };

    const power = () => {
        const { num1, num2 } = getValues();
        displayResult(num1 ** num2);
    };

    const clearCalculator = () => {
        setNum1("");
        setNum2("");
        setResult("");
        setIsRed(false);
    };

    return (
        <CalculatorContainer>
            <InputGroup>
                <label>First number:</label>
                <StyledInput
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />

                <label>Second number:</label>
                <StyledInput
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />
            </InputGroup>

            <br/>

            <ButtonGroup>
                <StyledButton onClick={addition}>+</StyledButton>
                <StyledButton onClick={subtraction}>-</StyledButton>
                <StyledButton onClick={multiplication}>*</StyledButton>
                <StyledButton onClick={division}>/</StyledButton>
                <StyledButton onClick={power}>^</StyledButton>
                <ClearButton onClick={clearCalculator}>Clear</ClearButton>
            </ButtonGroup>

            <StyledOutput $isRed={isRed}>
                {result !== "" && `Result: ${result}`}
            </StyledOutput>


        </CalculatorContainer>
    );
}
