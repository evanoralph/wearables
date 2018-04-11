import React from 'react';
import {connect} from 'react-redux';
import Content from '../../components/main/main-content/main-content-container';
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

    console.log("main props", this.props)

    return(
      <div id="main-page" className="page-container row no-padding no-margi">
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