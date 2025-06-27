import { useEffect, useState } from "react";
import { Bottom, ThisDayWrapper, Top } from "./styles";
import CurrentTime from "./CurrentTime";
import useWeather from "../../utils/useWeather.js";

const ThisDay = () => {
  const { data, isLoading } = useWeather("seoul");
  const weatherIcon = data?.weather[0].main;
  const temperature = Math.round(data?.main.temp || 0);
  const cityName = data?.name;

  let imageSrc = "./images/weatherIcons/clear-sky.svg";

  if (weatherIcon === "Clear") {
    imageSrc = "./images/weatherIcons/clear-sky.svg";
  } else if (weatherIcon === "Clouds") {
    imageSrc = "./images/weatherIcons/few-clouds.svg";
  } else if (weatherIcon === "Atmosphere") {
    imageSrc = "./images/weatherIcons/mist.svg";
  } else if (weatherIcon === "Rain") {
    imageSrc = "./images/weatherIcons/rain.svg";
  } else if (weatherIcon === "Snow") {
    imageSrc = "./images/weatherIcons/snow.svg";
  } else if (weatherIcon === "ThunderStorm") {
    imageSrc = "./images/weatherIcons/thunderStorm.svg";
  }

  return (
    <ThisDayWrapper>
      {isLoading ? (
        "Loading...."
      ) : (
        <>
          <Top>
            <div>
              <h2>{temperature}</h2>
              <h3>Now</h3>
            </div>
            <img src={imageSrc} alt="" />
          </Top>

          <Bottom>
            <CurrentTime />
            <div>{cityName} - KR</div>
          </Bottom>
        </>
      )}
    </ThisDayWrapper>
  );
};

export default ThisDay;
