import React from 'react';
import {connect} from 'react-redux';
import ImportButtons from '../../components/imports/imports-buttons/import-buttons-container'
import HeaderNav from '../../components/header/header-nav/header-nav-container';

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
      <div id="import-page" className="page-container row no-padding no-margin">
        <HeaderNav title="IMPORT CONTACTS" path="/sign-up-selection"/>
          <ImportButtons  history={this.props.history} />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Imports);