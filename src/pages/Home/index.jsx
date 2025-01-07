import { Link } from "react-router-dom";
import styled from "styled-components";
import homePicture from "../../assets/home-illustration.svg";
import colors from "../../utils/style/color";

const StyledImg = styled.img`
    width: 550px;
    height: 500px;
`;

const StyledMainDiv = styled.div`
    display: flex;
    align-items: center;
    background-color: ${colors.backgroundLight};
    height: calc(100vh - 110px);
    margin: 45px 40px 0px 40px;
    padding: 0 30px 0 30px;
    justify-content: space-around;
`;

const StyledFirstContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    color: white;
    border-radius: 30px;
    background-color: ${colors.primary};
    width: fit-content;
`; //le deuxieme $ est réservé seulement aux composants React, si balise html alors optionel

const StyledSpan = styled.span`
    font-size: 45px;
    line-height: 65.25px;
    width: 552px;
`;

function Home() {
    return (
        <StyledMainDiv>
            <StyledFirstContainer>
                <StyledSpan>Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents</StyledSpan>
                <StyledLink to='/survey/1'>Faire le test</StyledLink>
            </StyledFirstContainer>
            <StyledImg src={homePicture} alt="landingPicture"></StyledImg>
        </StyledMainDiv>
    );
}

export default Home;
