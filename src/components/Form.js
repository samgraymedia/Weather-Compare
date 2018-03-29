import React from "react";

class Form extends React.Component{
  render(){
    return(
      <form className="col col-2" onSubmit={this.props.getWeather}>
      <h4>Location 1:</h4>
        <label>
          <input type="text" name="city" placeholder=" "/>
          <div className="label-txt">City...</div>
        </label>
        <label>
          <input type="text" name="country" placeholder=" "/>
          <div className="label-txt">Country...</div>
        </label>
        <button>Get Weather</button>
      </form>
    );
  }
};

export default Form;
