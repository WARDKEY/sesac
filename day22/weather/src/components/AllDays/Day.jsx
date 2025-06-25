import { BottomPart, DayWrapper, TopPart } from "./styles";

const Day = () => {
  return (
    <DayWrapper>
      <TopPart>
        <div>
          <h2>Wed</h2>
          <h3>06.25</h3>
        </div>
        <img src="./images/weatherIcons/thunderstorm.svg" alt="" />
      </TopPart>
      <BottomPart>
        <h2>21C</h2>
        <h3>19C</h3>
      </BottomPart>
    </DayWrapper>
  );
};

export default Day;
