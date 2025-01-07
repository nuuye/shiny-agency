import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/color";
import logo from "../../assets/dark-logo.png";

//personalisation d'un élément qui vient d'une bibliothèque (Link de react.Router)
const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) => props.$isFullLink && `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`; //le deuxieme $ est réservé seulement aux composants React, si balise html alors optionel

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;
    padding-left: 33px;
    padding-right: 33px;
`;

const StyledImg = styled.img`
    width: 140px;
    height: 50px;
`;

function Header() {
    return (
        <StyledNav>
            <StyledImg src={logo}></StyledImg>
            <div>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
            </div>
        </StyledNav>
    );
}

export default Header;
