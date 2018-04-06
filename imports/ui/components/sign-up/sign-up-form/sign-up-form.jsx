import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import React from 'react';
import {connect} from 'react-redux';
import {required, password, email} from '../../../../lib/validations';
import SocialMediaLogin from '../../login/social-media-login/social-media-login-container';
import serialize from 'form-serialize';
import Picker from 'react-mobile-picker-scroll';


function _year(){
  let year = 1910;
  let years = [];

  while(year <= 2018){
    years.push(year);
    year++;
  }
  return years;
}


class SignUpForm extends React.Component {

  constructor(props) {
    super(props);

    let year = _year();


    this.state = {
      pickerStatus:false,
      agreeStatus:false,
      date:"",
      valueGroups: {
        month: 'Jun',
        day: 15,
        year: 1990
      },
      optionGroups: {
        month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        year
      }
    };
  }

  signUp(e) {
    e.preventDefault();
    const form = document.querySelector("#sign-up-form");
    const formData = serialize(form, {hash: true});
    console.log(formData);
    // this.props.login(formData);
  }

  // Update the value in response to user picking event
  handleChange = (name, value) => {
    this.setState(({valueGroups}) => ({
      valueGroups: {
        ...valueGroups,
        [name]: value
      }
    }));
  };

  setDate(){
    const {month,day,year} =this.state.valueGroups;
    this.setState({pickerStatus:false,date:`${month}-${day}-${year}`})
  }

  picker() {

    const {optionGroups, valueGroups, pickerStatus} = this.state;
    if (pickerStatus === true) {
      return (
        <div className="picker-wrapper">
          <div className="picker-inner-wrapper">
            <div className="picker-title">BIRTHDAY</div>
            <Picker
              optionGroups={optionGroups}
              valueGroups={valueGroups}
              onChange={this.handleChange.bind(this)}/>
            <div className="picker-buttons">
              <div className="button-grid">
                <div className="button" onClick={this.closePicker.bind(this)}>cancel</div>
              </div>
              <div className="button-grid">
                <div className="button" onClick={this.setDate.bind(this)}>ok</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  openPicker(){
    this.setState({pickerStatus:true});
  }

  closePicker(){
    this.setState({pickerStatus:false});
  }

  agreeButton(){
    this.setState({agreeStatus:!this.state.agreeStatus});
  }

  render() {

    return (
      <Form
        ref={c => { this.form = c }}
        onSubmit={this.signUp.bind(this)}
        id="sign-up-form"
        className="row no-margin"
      >
        <div className="col-xs-12 no-padding">
          <Input type="text" name='firstName' placeholder="First Name" validations={[required]}/>
          <Input type="text" name='lastName' placeholder="Last Name" validations={[required]}/>
          <Input type="text" name='email' placeholder="Email" validations={[required]}/>
          <Input type="text" name='date' value={this.state.date} onClick={this.openPicker.bind(this)} placeholder="BirthDay" validations={[required]}/>
          <div className="terms-and-policy row no-margin">
            <div className="col-xs-3 no-padding" >
              <div className="toggle-button" style={{"background":this.state.agreeStatus ? "#726D6D" : "white"}} onClick={this.agreeButton.bind(this)}></div>
            </div>
            <div className="col-xs-8 no-padding policy">
              I agree to the terms of use and the privacy policy
            </div>
          </div>
          <Button>SIGN UP</Button>
        </div>
        {this.picker()}
      </Form>
    );
  }

}
;

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(SignUpForm);