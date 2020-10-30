import React from "react";
import axios from 'axios';

export default function Weather(props) {

  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}°F`)
  }
  let apiKey = "5a533b6a6d16b85bbee4c6b85f37d1be";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <h1>
      Hello World!!!
    </h1>
  );
}