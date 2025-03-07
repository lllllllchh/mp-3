import {StyledContent, StyledMain, StyledImg} from "./StyledComponents.tsx";

export default function Home(){
    return(
        <StyledContent>
            <StyledMain>
                <StyledImg src="/profile.jpg" id="profile" alt="Cindy Lin"/>
                <h3> Home </h3>

                <p> I am Chih-Hsuan (Cindy) Lin, a dedicated and highly motivated junior at Boston University who is
                    expected to
                    graduate in May 2026, currently pursuing a Bachelor of Arts in Computer Science with a Minor in
                    Business Administration.
                    With a cumulative GPA of 3.83/4.0, I have consistently demonstrated strong academic performance and
                    a passion for
                    Computer Science and Business Administration.</p> <br/>

                <p> Thank you for visiting! This website highlights my <strong><em>Educational</em></strong> and
                    <strong><em> Employment</em></strong> background, alongside my achievements, leadership roles,
                    and projects that define my journey. </p>
            </StyledMain>
        </StyledContent>
    )
}