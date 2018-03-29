import React from "react";


class OtherWeather extends React.Component{
  render(){
    return(
      <div>
      <div className="col col-2">
        {this.props.otherTemperature &&
          <div className="place-temp">
            <span>{this.props.otherTemperature}°C</span>
            {this.props.otherCity && this.props.otherCountry && <p>{this.props.otherCity}, {this.props.otherCountry}</p>}
          </div>
        }
        {this.props.otherHumidity &&
          <div className="conditions">
          {<span>{this.props.otherHumidity}% Humidity</span>}
          {<p>{this.props.otherDescription}</p>}
          </div>
        }



        {this.props.otherError && <p className="error">Error: {this.props.otherError}</p>}
      </div>
      </div>
    );
  }
};

export default OtherWeather;
