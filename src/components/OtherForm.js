import React from "react";

class OtherForm extends React.Component{
  render(){
    return(
      <form className="col col-2" onSubmit={this.props.getOtherWeather}>
      <h4>Location 2:</h4>
        <label>
          <input type="text" name="otherCity" placeholder=" "/>
          <div className="label-txt">City...</div>
        </label>
        <label>
          <input type="text" placeholder=" " name="otherCountry"/>
          <div className="label-txt">Country...</div>
        </label>
        <button>Get Weather</button>
      </form>
    );
  }
};

export default OtherForm;
