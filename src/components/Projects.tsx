import Calculator from "./Calculator.tsx";
import {StyledContent, StyledMain} from "./StyledComponents.tsx";

export default function Projects(){
    return (
        <StyledContent>
            <StyledMain>
                <h3>Project #1 : Calculator</h3>
                <Calculator />
            </StyledMain>

        </StyledContent>
    )
}