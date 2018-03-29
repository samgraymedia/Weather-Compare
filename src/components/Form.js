import React from "react";

class Form extends React.Component{
  render(){
    return(
      <form className="col col-2" onSubmit={this.props.getWeather}>
      <h4>Location 1:</h4>
        <input type="text" name="city" placeholder="City..."/>
        <input type="text" name="country" placeholder="Country..."/>
        <button>Get Weather</button>
      </form>
    );
  }
};

export default Form;
