import {styled} from 'styled-components'

export const StyledMain = styled.main`
    width: 70%;
    height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width:1000px){
            width: 100%;
            height: 100vh;
            margin: 40px auto;
            display: flex;
            flex-direction: column;
        }
`

export const StyledContent = styled.div`
    width: 100%;
    line-height: 1.5;
    height: 100%;

    h2 {
        font-size: calc(7px + 1vw);
        margin: 0 1vw;
        color: #333;
    }
    
    h3 {
        font-size: calc(5px + 1vw);
        margin: 0 1vw;
        color: #444;
    }

    h4{
        font-size: calc(5px + 1vw);
        margin: 0 1vw;
        color: #444;
    }

    p{
        font-size: calc(5px + 1vw);
        margin: 0 1vw;
    }

    @media screen and (max-width:1000px) {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
`

export const StyledImg = styled.img`
    width: 30%;
`
