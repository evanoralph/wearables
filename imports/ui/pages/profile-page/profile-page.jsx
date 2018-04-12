import React from 'react';
import {connect} from 'react-redux';
import Content from '../../components/profile/profile-content/profile-content-container';
import HeaderSettings from '../../components/header/header-settings/header-settings-container';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showHeader: true,
      currentUser: props.currentUser,
    }

  }

  render() {

    return(
      <div id="profile-page" className="page-container row no-padding no-margin">
        <HeaderSettings onSetOpen={this.props.onSetOpen} open={this.props.open} />
        <Content/>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Main);