import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class TextBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) { //Stores the user input value
      var name = event.target.name;
      this.setState({[name]: event.target.value});
    }
  
    handleSubmit(event) { //Currently just prints the search result to the screen but eventually will send info to the API call
      var name = event.target.name;
      var search = this.state[name];
      alert(search);
      event.preventDefault();
    }
      
    render() {
      var selection = this.props.selection; //Based on the selection value passed in from Form.js return the appropriate text box 

      if(selection == "Subject")
      {
        return (
          <div className="inLine">
            <form>
              <input className="textBox" type="text"  name="subject" value={this.state.name} onChange={this.handleChange}/> 
              <input className="submitButton" type="submit" name="subject" value="Submit" onClick={this.handleSubmit}/>
            </form>
          </div>
        );
      }
  
      else if(selection == "Topic")
      {
        return (
          <div className="inLine">
          <form>
          <input className="textBox" type="text" name="Topic" value={this.state.name} onChange={this.handleChange}/>
          <input className="submitButton" type="submit" name="Topic" value="Submit" onClick={this.handleSubmit}/>
          </form>
          </div>
        );
      }

      else if(selection == "Title")
      {
        return (
          <div className="inLine">
          <form>
          <input className="textBox" type="text" name="Title" value={this.state.name} onChange={this.handleChange}/>
          <input className="submitButton" type="submit" name="Title" value="Submit" onClick={this.handleSubmit}/>
          </form>
          </div>
        );
      }

      else if(selection == "Rights")
      {
        return (
          <div className="inLine">
          <form>
          <input className="textBox" type="text" name="Rights" value={this.state.name} onChange={this.handleChange}/>
          <input className="submitButton" type="submit" name="Rights" value="Submit" onClick={this.handleSubmit}/>
          </form>
          </div>
        );
      }

      else if(selection == "Format")
      {
        return (
          <div className="inLine">
          <form>
          <input className="textBox" type="text" name="Format" value={this.state.name} onChange={this.handleChange}/>
          <input className="submitButton" type="submit" name="Format" value="Submit" onClick={this.handleSubmit}/>
          </form>
          </div>
        );
      }

      else if(selection == "Collection")
      {
        return (
          <div className="inLine">
          <form>
          <input className="textBox" type="text" name="Collection" value={this.state.name} onChange={this.handleChange}/>
          <input className="submitButton" type="submit" name="Collection" value="Submit" onClick={this.handleSubmit}/>
          </form>
          </div>
        );
      }

      else if(selection == "State")
      {
        return (
          <div className="inLine">
              <form>
          <label>
            <select className="dropDownState" onChange={this.handleSubmit}>
            <option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
            </select>
          </label>
          <input className="submitButton" type="submit" name="State" value="Submit" onClick={this.handleSubmit}/>
        </form>
          </div>
        );
      }

      else if(selection == "Author")
      {
        return (
          <div className="inLine">
          <form>
          <input className="textBox" type="text" name="topic" value={this.state.name} onChange={this.handleChange}/>
          <input className="submitButton" type="submit" name="topic" value="Submit" onClick={this.handleSubmit}/>
          </form>
          </div>
        );
      }

      else if(selection == "Date")
      {
        return (
          <div className="inLine">
          <p> Implement Calender </p>
          </div>
        );
      }

      else if(selection == "Description")
      {
        return (
          <div className="inLine">
          <form>
          <input className="textBox" type="text" name="topic" value={this.state.name} onChange={this.handleChange}/>
          <input className="submitButton" type="submit" name="topic" value="Submit" onClick={this.handleSubmit}/>
          </form>
          </div>
        );
      }

      else if(selection == "Language")
      {
        return (
          <div className="inLine">
          <form>
          <input className="textBox" type="text" name="topic" value={this.state.name} onChange={this.handleChange}/>
          <input className="submitButton" type="submit" name="topic" value="Submit" onClick={this.handleSubmit}/>
          </form>
          </div>
        );
      }
  
      else
      {
        return (
          <div className="inLine">
            <form>
              <input className="textBox" type="text"  name="subject" value={this.state.name} onChange={this.handleChange}/> 
              <input className="submitButton" type="submit" name="subject" value="Submit" onClick={this.handleSubmit}/>
            </form>
          </div>
        );
      }
    }
  }
    
  export default TextBox;