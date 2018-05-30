import React from 'react';
import {connect} from 'react-redux';
import HeaderNav from '../../components/header/header-nav/header-nav-container';
import List from '../../components/contact-list/list-container';


class ContactsList extends React.Component {

  render() {
    return(
      <div id="contacts-container" className="page-container row no-padding no-margin">
        <HeaderNav img="img/import-icons/android.svg" path="/imports" doneButton={true}/>
        <List/>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ContactsList);