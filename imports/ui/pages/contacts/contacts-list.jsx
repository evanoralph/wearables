import React from 'react';
import {connect} from 'react-redux';
import HeaderNav from '../../components/header/header-nav/header-nav-container';
import _ from 'lodash';
import classNames from 'classnames';

class ContactsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      alpha: "a",
      contacts: [
        {
          lastName: "Armstrong",
          firstName: "Craig",
          company: "Cedar Sinai",
          job: "Doctor",
          location: "North Wing",
          alternateName: "Dr. K. Hollister",
        },
        {
          lastName: "Adamos",
          firstName: "Raquel",
          company: "Google",
          job: "Marketing",
          location: "California",
          alternateName: "",
        },
        {
          lastName: "Kernick",
          firstName: "Steven",
          company: "Astrolabe",
          job: "Software Engineer",
          location: "Manila",
          alternateName: "",
        },
      ],
      keyContacts: [],

    }
  }

  addContactToKeylist(contact){
    //TODO: Add Contact to Key List
    console.log("Add Contact", contact)
  }

  renderContactList(){
    let contactList = [];

    if (!!this.state.contacts) {

      let contacts =  _.orderBy(this.state.contacts, ['lastName'],['asc']); // Use Lodash to sort array by 'name'
      let sorted = contacts.filter((contact) => contact.lastName.toUpperCase().startsWith(this.state.alpha.toUpperCase()));

      sorted.map((contact, index) => {
        contactList.push(
          <div className={classNames({"contact-item": true, "active": false})} key={index+contact.firstName} onClick={this.addContactToKeylist.bind(this, contact)}>
            {contact.lastName}, {contact.firstName}
          </div>
        )
      })
    }

    return contactList;
  }

  setAlpha(alpha){
    this.setState({
      alpha: alpha
    })
  }

  render() {
    return(
      <div id="import-page" className="page-container row no-padding no-margin">
        <div className="wrapper">
          <HeaderNav img="img/import-icons/android.svg" path="/sign-up-selection" doneButton={true}/>
          <div className="contacts-title">
            CHOOSE KEY CONTACTS
          </div>
          <div id="contacts-container">

            <div className="contacts-list">

              {this.renderContactList(this.state.alpha)}

            </div>
            <div className="contacts-navigation">
              <div className={classNames({"alpha-sort": true, "active": this.state.alpha === "a"})} onClick={this.setAlpha.bind(this, "a")}>A</div>
              <div className={classNames({"alpha-sort": true, "active": this.state.alpha === "b"})} onClick={this.setAlpha.bind(this, "b")}>B</div>
              <div className={classNames({"alpha-sort": true, "active": this.state.alpha === "c"})} onClick={this.setAlpha.bind(this, "c")}>C</div>
              <div className={classNames({"alpha-sort": true, "active": this.state.alpha === "d"})} onClick={this.setAlpha.bind(this, "d")}>D</div>
              <div className={classNames({"alpha-sort": true, "active": this.state.alpha === "e"})} onClick={this.setAlpha.bind(this, "e")}>E</div>
              <div className={classNames({"alpha-sort": true, "active": this.state.alpha === "f"})} onClick={this.setAlpha.bind(this, "f")}>F</div>
              <div className={classNames({"alpha-sort": true, "active": this.state.alpha === "g"})} onClick={this.setAlpha.bind(this, "g")}>G</div>
              <div className={classNames({"alpha-sort": true, "active": this.state.alpha === "h"})} onClick={this.setAlpha.bind(this, "h")}>H</div>
              <div className={classNames({"alpha-sort": true, "active": this.state.alpha === "i"})} onClick={this.setAlpha.bind(this, "i")}>I</div>
              <div className={classNames({"alpha-sort": true, "active": this.state.alpha === "j"})} onClick={this.setAlpha.bind(this, "j")}>J</div>
              <div className={classNames({"alpha-sort": true, "active": this.state.alpha === "k"})} onClick={this.setAlpha.bind(this, "k")}>K</div>
              <div className={classNames({"alpha-sort": true, "active": this.state.alpha === "l"})} onClick={this.setAlpha.bind(this, "l")}>L</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ContactsList);