import { useWeatherForecast } from "../../utils/useWeatherForecast";
import Day from "./Day";
import { AllDaysWrapper } from "./styles";

const AllDays = () => {
  const { days, isLoading } = useWeatherForecast("Seoul");
  console.log(days);

  return (
    <AllDaysWrapper>
      {days.map((day) => (
        <Day key={day.date} day={day}></Day>
      ))}
    </AllDaysWrapper>
  );
};

export default AllDays;
