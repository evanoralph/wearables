import React from 'react';
import {connect} from 'react-redux';
import ImportButtons from '../../components/imports/imports-buttons/import-buttons-container'

class Imports extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showHeader: true,
      currentUser: props.currentUser,
    }
  }

  render() {
    return(
      <div id="import-page" className="page-container row  middle-xs no-padding no-margin">
        <div className="wrapper">
          <div className="title">IMPORT CONTACTS</div>
          <div className="content">
            Import your contacts so you can select the key people in your life.
            The jewelry will vibrate whenever they reach out to you.
          </div>
          <ImportButtons/>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Imports);