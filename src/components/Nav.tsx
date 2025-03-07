import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink= styled(Link)`
    text-decoration: none;
    color: #F7F6F5;
`

const StyledNav = styled.nav`
    width: 30%;
    height: 100vh;
    background-color: #C1B9B0;

    ul {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: center;
        list-style: none;
        padding-left: 0;
        margin: 0;
    }

    li {
        font-size: calc(10px + 1vw);
        width: 90%;
        background-color: #D8D4CE;
        padding: 15px;
        margin: 10px auto;
    }

    a {
        text-decoration: none;
        color: #F7F6F5;
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 5vh;

        ul {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            text-align: center;
            list-style: none;
            padding-left: 0;
        }

       li {
            font-size: calc(2px + 1.5vw);
            height: 7%;
            color: #F7F6F5;
            padding: 1% 1%;
            margin: 1% .5%;
        }
    }
`

export default function Nav(){
    return(
        <>
        <StyledNav>
            <ul>
                <li> <StyledLink to={`/`}>Home</StyledLink> </li>
                <li> <StyledLink to={`/education`}>Education</StyledLink> </li>
                <li> <StyledLink to={`/projects`}>Projects</StyledLink> </li>
                <li> <StyledLink to={`/leadership_experience`}>Leadership Experience</StyledLink> </li>
                <li> <StyledLink to={`/achievements`}>Achievements</StyledLink> </li>
                <li> <StyledLink to={`/work_experience`}>Work Experience</StyledLink> </li>
            </ul>
        </StyledNav>
        </>
    )
}