import React from 'react';
import {connect} from 'react-redux';
import {required} from "../../../../lib/validations";
import HeaderNav from '../../../components/header/header-nav/header-nav-container';


class MainContent extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }


  editJewelry() {
    alert("This will edit the current jewelry");
  }

  addJewelry() {
    alert("This will add a new jewelry");
  }

  render() {
    return(
      <div id="main-content" className="content-container no-margin">
        <div className="col-xs-12 no-padding">
          <span className="content-title">JEWELRY COLLECTION</span>
        </div>

        <div id="jewelry-collection">

          <div className="jewelry-box has-item">
            <div className="edit-jewelry" onClick={this.editJewelry.bind(this)}></div>
            <div className="jewelry-image" style={{backgroundImage: `url(${'url-of-image-here'})`}}></div>
            <div className="jewelry-details">
              <span className="jewelry-type">Bracelet</span>
              <span className="jewelry-name">Carnelian Brass</span>
              <span className="jewelry-series">Fall 2016</span>
            </div>
          </div>
          <div className="jewelry-box add-item" onClick={this.addJewelry.bind(this)}>
          </div>
          <div className="jewelry-box">
          </div>
          <div className="jewelry-box">
          </div>

        </div>

      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(MainContent);