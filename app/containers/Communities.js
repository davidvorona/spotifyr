import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "../actions/communitiesActions";
import PanelTab from "../components/PanelTab";  // eslint-disable-line no-unused-vars

// there will be three PanelTabs here
class Communities extends Component {
    render() {
        const { communities, displayMyCommunities, displayPopular, displayCurrent } = this.props;
        return (
            <div className="container-fluid widget-container">
              <h3>Communities</h3>
              <div className="row center-block">
                <button
                  className="col-md-4 btn btn-group right-border"
                  onClick={() => displayPopular("popular")}>
                  Popular
                </button>
                <button
                  className="col-md-4 btn btn-group"
                  onClick={() => displayMyCommunities("myCommunities")}>
                  My Communities
                </button>
                <button
                  className="col-md-4 btn btn-group left-border"
                  onClick={() => displayCurrent("current")}>
                  Current
                </button>
              </div>
              <PanelTab communities={communities[communities.active]} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        communities: state.communities
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Communities);

if (module.hot) module.hot.accept();
