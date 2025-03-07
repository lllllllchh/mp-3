{/*import { Link } from 'react-router-dom';*/}
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { styled } from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 10px;
    margin-bottom: 10px;

    @media screen and (max-width: 1000px) {
            display: flex;
            justify-content: center;
            text-align: center;
    }
`
/*const StyledPageWrapper = styled.div`
    width: 90vw;
    margin: 0 auto;
    background-color: #B1A89C;
`*/

const StyledH1 = styled.h1`
    font-size: calc(20px + 1vw);
`

const StyledP = styled.p`   
    font-size: calc(8px + 1vw);
`
const headers: { [key: string]: string } = {
    home: "This is My Resume",
    projects: "Exciting projects coming soon. Stay tuned!",
    education: "A journey of academic excellence, lifelong learning, and professional growth",
    achievements: "A reflection of my dedication to academic excellence and continuous growth",
    work_experience: "Gaining valuable skills and insights through hands-on experience in diverse professional settings",
    leadership_experience: "Driving positive change through collaboration and initiative",
};

const formatTitle = (text: string) => {
    let result = "";
    let capitalizeNext = true;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (char === "_" || char === " ") {
            result += " ";
            capitalizeNext = true;
        } else {
            if (capitalizeNext) {
                result += char.toUpperCase();
                capitalizeNext = false;
            } else {
                result += char.toLowerCase();
            }
        }
    }
    return result;
};

const normalizeKey = (text: string) => {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (char === " ") {
            result += "_";
        } else {
            result += char.toLowerCase();
        }
    }

    return result;
};

export default function Header(){
    const currentPath = useParams();
    let lastValue = Object.values(currentPath).pop() || "";

    if (!lastValue) {
        lastValue = "Cindy Lin";
    } else {
        lastValue = lastValue.charAt(0).toUpperCase() + lastValue.slice(1);
    }
    const formattedTitle = formatTitle(lastValue);
    const normalizedKey = normalizeKey(formattedTitle);

    useEffect(() => {
        if(lastValue==="Cindy Lin"){
            document.title= "Home | Resume";
        }else {
            document.title= lastValue+" | Resume";
    }}, [lastValue])

    return(
        <>
        <StyledHeader>
                <StyledH1> {formattedTitle} </StyledH1>
                <StyledP> {headers[normalizedKey] || headers["home"] }</StyledP>
        </StyledHeader>
        </>
    )
}