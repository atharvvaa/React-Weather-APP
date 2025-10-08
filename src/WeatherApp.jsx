import { useState } from "react"
import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
      city: "Mumbai",
      feelLike: 36.59,
      humidity: 58,
      temp: 32.05,
      tempMax: 32.05,
      tempMin: 32.05,
      weather: "few clouds"
    });

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    };

    return(
      <div style={{textAlign: "center"}}> 
      <h2> Weather App by ATHARVA</h2>
      <SearchBox updateInfo= {updateInfo} />
      <InfoBox info= {weatherInfo}/>
      </div>
    )
}