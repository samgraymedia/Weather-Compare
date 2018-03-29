import React from "react";

class OtherForm extends React.Component{
  render(){
    return(
      <form className="col col-3" onSubmit={this.props.getOtherWeather}>
      <h4>Location 2:</h4>
        <input type="text" name="otherCity" placeholder="city"/>
        <input type="text" name="otherCountry" placeholder="country"/>
        <button>Get Weather</button>
      </form>
    );
  }
};

export default OtherForm;
