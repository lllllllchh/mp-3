import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledFooter = styled.footer`
    padding: 10px;
    text-align: center;
    background-color: #f1f1f1;
`

export default function Footer(){
    return(
        <StyledFooter>
        <p> All rights reserved: <Link to={""}>Credits</Link> &copy; </p>
        </StyledFooter>
    )
}