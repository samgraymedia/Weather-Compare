import React from "react";


class Weather extends React.Component{
  render(){
    return(
      <div className="col col-2 margin">
        {this.props.temperature &&
          <div className="place-temp">
            <span>{this.props.temperature}°C</span>
            {this.props.city && this.props.country && <p>{this.props.city}, {this.props.country}</p>}
          </div>
        }
        {this.props.humidity &&
          <div className="conditions">
          {<span>{this.props.humidity}% Humidity</span>}
          {<p>{this.props.description}</p>}
          </div>
        }



        {this.props.error && <p className="error">Error: {this.props.error}</p>}
      </div>
    );
  }
};

export default Weather;
