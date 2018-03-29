import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import OtherForm from "./components/OtherForm";
import Weather from "./components/Weather";
import OtherWeather from "./components/OtherWeather";
const API_KEY = "301f747985ad5574d5dbc0c0559afd12";

class App extends React.Component{
  state = {
    Temperature: undefined,
    City: undefined,
    Country: undefined,
    Humidity: undefined,
    Description: undefined,
    error: undefined,
    otherTemperature: undefined,
    otherCity: undefined,
    otherCountry: undefined,
    otherHumidity: undefined,
    otherDescription: undefined,
    otherError: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please Enter The Vaules"
      });
    }

  }
  getOtherWeather = async (e) => {
    e.preventDefault();
    const otherCity = e.target.elements.otherCity.value;
    const otherCountry = e.target.elements.otherCountry.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${otherCity},${otherCountry}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (otherCity && otherCountry) {
      console.log(data);
      this.setState({
        otherTemperature: data.main.temp,
        otherCity: data.name,
        otherCountry: data.sys.country,
        otherHumidity: data.main.humidity,
        otherDescription: data.weather[0].description,
        otherError: ""
      });
    } else {
      this.setState({
        OtherTemperature: undefined,
        OtherCity: undefined,
        OtherCountry: undefined,
        OtherHumidity: undefined,
        OtherDescription: undefined,
        OtherError: "Please Enter The Vaules"
      });
    }

  }
  render(){
    return(
      <div className="wrap">
        <Titles />
        <div className="grid-wrap">
            <Form getWeather={this.getWeather} />
            <OtherForm getOtherWeather={this.getOtherWeather} />
          </div>
          <div className="grid-wrap">
          <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
          />
          <OtherWeather
          otherTemperature={this.state.otherTemperature}
          otherCity={this.state.otherCity}
          otherCountry={this.state.otherCountry}
          otherHumidity={this.state.otherHumidity}
          otherDescription={this.state.otherDescription}
          otherError={this.state.otherError}
          />
        </div>

      </div>
    );
  }
};

export default App;
