import OpenWeather from "openweathermap-ts";
const openWeather = new OpenWeather({
  apiKey: "c20ea6c4c0bc10e58d43dcd25f3f4bc0",
});
openWeather.setUnits("metric");
export default openWeather;
