import React, {useState, useEffect} from 'react';
import axios from "axios";
import UserService from "../services/User.service";

const Weather = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
      axios.get("http://localhost:5126/WeatherForecast",{
        headers: {
            "Authorization": `Bearer ${UserService.getToken()}`
        }
      }).then((response) => {
        setData(response.data);
      }).catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div>
      <h1>Weather</h1>
      {data && (<pre>{JSON.stringify(data)}</pre>)}
      {error && (<pre>{JSON.stringify(error)}</pre>)}
    </div>
  );
};

export default Weather;
