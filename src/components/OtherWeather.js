import React from "react";


class OtherWeather extends React.Component{
  render(){
    return(
      <div className="col col-3">
        {this.props.otherCity && this.props.otherCountry && <p>Location: {this.props.otherCity}, {this.props.otherCountry}</p>}
        {this.props.otherTemperature && <p>Temperature: {this.props.otherTemperature}</p>}
        {this.props.otherHumidity && <p>Humidity: {this.props.otherHumidity}</p>}
        {this.props.otherDescription && <p>Weather: {this.props.otherDescription}</p>}
        {this.props.otherError && <p>Error: {this.props.otherError}</p>}
      </div>
    );
  }
};

export default OtherWeather;
