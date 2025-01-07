import DefaultPicture from "../../assets/profile.png";
import Card from "../../components/Card";
import styled from "styled-components";
import colors from "../../utils/style/color";

const freelanceProfiles = [
    {
        name: "Jane Doe",
        jobTitle: "Devops",
        picture: DefaultPicture,
    },
    {
        name: "John Doe",
        jobTitle: "Developpeur frontend",
        picture: DefaultPicture,
    },
    {
        name: "Jeanne Biche",
        jobTitle: "Développeuse Fullstack",
        picture: DefaultPicture,
    },
];

const CardsContainer = styled.div`
    display: grid;
    gap: 20px;
    grid-template-rows: 280px 350px;
    grid-template-columns: repeat(2, 0fr);
    justify-content: center;
`;

const StyledFreelanceIntroDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 10px;
`;

const StyledSpan = styled.span`
    font-size: 20px;
    color: ${colors.secondary};
    ${(props) => props.$mediumFontSize && `font-size: 30px; color: black;`}
`;

const StyledMainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
`;
function Freelances() {
    return (
        <StyledMainDiv>
            <StyledFreelanceIntroDiv>
                <StyledSpan $mediumFontSize>Trouvez votre prestataire</StyledSpan>
                <StyledSpan>Chez Shiny nous réunissons les meilleurs profils pour vous.</StyledSpan>
            </StyledFreelanceIntroDiv>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        picture={profile.picture}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
        </StyledMainDiv>
    );
}
export default Freelances;
