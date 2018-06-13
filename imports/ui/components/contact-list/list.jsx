import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import classNames from 'classnames';

class List extends React.Component {

  constructor(props) {
    super(props);
    console.log(props.contacts)
    this.state = {
      alpha: "a",
      alphabets: "abcdefghijklmnopqrstuvwxyz".split(""),
      // contacts: [
      //   {
      //     lastName: "Armstrong",
      //     firstName: "Craig",
      //     company: "Cedar Sinai",
      //     job: "Doctor",
      //     location: "North Wing",
      //     alternateName: "Dr. K. Hollister",
      //   },
      //   {
      //     lastName: "Adamos",
      //     firstName: "Raquel",
      //     company: "Google",
      //     job: "Marketing",
      //     location: "California",
      //     alternateName: "",
      //   },      {
      //     lastName: "Adamos",
      //     firstName: "Raquel",
      //     company: "Google",
      //     job: "Marketing",
      //     location: "California",
      //     alternateName: "",
      //   },      {
      //     lastName: "Adamos",
      //     firstName: "Raquel",
      //     company: "Google",
      //     job: "Marketing",
      //     location: "California",
      //     alternateName: "",
      //   },      {
      //     lastName: "Adamos",
      //     firstName: "Raquel",
      //     company: "Google",
      //     job: "Marketing",
      //     location: "California",
      //     alternateName: "",
      //   },      {
      //     lastName: "Adamos",
      //     firstName: "Raquel",
      //     company: "Google",
      //     job: "Marketing",
      //     location: "California",
      //     alternateName: "",
      //   },      {
      //     lastName: "Adamos",
      //     firstName: "Raquel",
      //     company: "Google",
      //     job: "Marketing",
      //     location: "California",
      //     alternateName: "",
      //   },      {
      //     lastName: "Adamos",
      //     firstName: "Raquel",
      //     company: "Google",
      //     job: "Marketing",
      //     location: "California",
      //     alternateName: "",
      //   },      {
      //     lastName: "Adamos",
      //     firstName: "Raquel",
      //     company: "Google",
      //     job: "Marketing",
      //     location: "California",
      //     alternateName: "",
      //   },      {
      //     lastName: "Adamos",
      //     firstName: "Raquel",
      //     company: "Google",
      //     job: "Marketing",
      //     location: "California",
      //     alternateName: "",
      //   },      {
      //     lastName: "Adamos",
      //     firstName: "Raquel",
      //     company: "Google",
      //     job: "Marketing",
      //     location: "California",
      //     alternateName: "",
      //   },
      //   {
      //     lastName: "Kernick",
      //     firstName: "Steven",
      //     company: "Astrolabe",
      //     job: "Software Engineer",
      //     location: "Manila",
      //     alternateName: "",
      //   },
      // ],
      contacts: props.contacts,
      keyContacts: [],

    }
  }

  addContactToKeylist(contact) {
    //TODO: Add Contact to Key List
    console.log("Add Contact", contact)
  }

  renderContactList() {
    let contactList = [];

    if (!!this.state.contacts) {

      let contacts = _.orderBy(this.state.contacts, ['lastName'], ['asc']); // Use Lodash to sort array by 'name'
      let sorted = contacts.filter((contact) => {
        if (contact.info.lastName) {
          return contact.info.lastName.toUpperCase().startsWith(this.state.alpha.toUpperCase())
        } else {
          return contact.info.firstName.toUpperCase().startsWith(this.state.alpha.toUpperCase())
        }
      });

      sorted.map((contact, index) => {
        contactList.push(
          <div className={classNames({"contact-item": true, "active": false})} key={index+contact.info.firstName}
               onClick={this.addContactToKeylist.bind(this, contact)}>
            {contact.info.lastName && contact.info.lastName + ","} {contact.info.firstName} {contact.info.middleName && contact.info.middleName}
          </div>
        )
      })
    }

    return contactList;
  }

  navigation(){
    return this.state.alphabets.map((a)=>{
      return (
        <div key={a} className={classNames({"alpha-sort": true, "active": this.state.alpha === a})}
             onClick={this.setAlpha.bind(this, a)}>{a}
        </div>
      )
    });
  }

  setAlpha(alpha) {
    this.setState({
      alpha: alpha
    })
  }

  render() {
    return (
      <div id="contacts-list-container" className="no-padding no-margin">
        <div className="contacts-title">
          CHOOSE KEY CONTACTS
        </div>
        <div className="contacts-container">

          <div className="contacts-list">

            {this.renderContactList(this.state.alpha)}

          </div>

        </div>
        <div className="contacts-navigation middle-xs">
          {this.navigation()}
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(List);