import errorPicture from "../../assets/404.svg";
import styled from "styled-components";
import colors from "../../utils/style/color";

const StyledErrorImg = styled.img`
    width: 600px;
`;

const StyledMainDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 65px);
    background-color: ${colors.backgroundLight};
    margin: 45px 40px 45px 40px;
    gap: 50px;
`;

const StyledSpan = styled.span`
    font-size: 31px;
`;

function Error() {
    return (
        <StyledMainDiv>
            <StyledSpan>Oups...</StyledSpan>
            <StyledErrorImg src={errorPicture} alt="errorPicture"></StyledErrorImg>
            <StyledSpan>Il semblerait qu’il y ait un problème</StyledSpan>
        </StyledMainDiv>
    );
}

export default Error;
