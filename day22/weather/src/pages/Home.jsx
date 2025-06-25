import AllDays from "../components/AllDays/AllDays";
import Header from "../components/Header/Header";
import ThisDay from "../components/ThisDay/ThisDay";
import ThisDayInfo from "../components/ThisDayInfo/ThisDayInfo";
import {
  HomeWrapper,
  BackgroundGradient,
  MainContent,
  WeatherSection,
  InfoSection,
  ForecastSection,
} from "./styles";

const Home = () => {
  return (
    <HomeWrapper>
      <BackgroundGradient>
        <Header />
        <MainContent>
          <WeatherSection>
            <ThisDay />
          </WeatherSection>
          <InfoSection>
            <ThisDayInfo />
          </InfoSection>
        </MainContent>
        <ForecastSection></ForecastSection>
        <AllDays />
      </BackgroundGradient>
    </HomeWrapper>
  );
};

export default Home;
