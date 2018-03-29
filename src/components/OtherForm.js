import React from "react";

class OtherForm extends React.Component{
  render(){
    return(
      <form className="col col-2" onSubmit={this.props.getOtherWeather}>
      <h4>Location 2:</h4>
        <input type="text" name="otherCity" placeholder="City..."/>
        <input type="text" name="otherCountry" placeholder="Country..."/>
        <button>Get Weather</button>
      </form>
    );
  }
};

export default OtherForm;
