/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "./actions/communitiesActions";
import TabBody from "../components/TabBody";
import Community from "./components/Community";
import ActiveTab from "../components/ActiveTab";

class Communities extends Component {
    componentDidMount() {
        const { fetchPopular, fetchMyCommunities } = this.props;
        fetchPopular();
        fetchMyCommunities();
    }

    chooseFetchAll(active) {
        const { fetchPopular, fetchMyCommunities } = this.props;
        switch (active) {
        case "popular":
            return fetchPopular;
        case "myCommunities":
            return fetchMyCommunities;
        default:
            return fetchPopular;
        }
    }

    render() {
        const { communities, displayCommunityTab, fetchCommunity } = this.props;
        return (
            <div className="container-fluid widget-container">
              <h3>Communities</h3>
              <div className="row center-block">
                <ActiveTab
                  name="Popular"
                  type={["popular", "list", true]}
                  isActive={communities.active[0] === "popular"}
                  display={displayCommunityTab}
                />
                <ActiveTab
                  name="My Communities"
                  type={["myCommunities", "list", true]}
                  isActive={communities.active[0] === "myCommunities"}
                  display={displayCommunityTab}
                />
                <ActiveTab
                  name="Current"
                  type={["current", "content", false]}
                  isActive={communities.active[0] === "current"}
                  display={displayCommunityTab}
                />
              </div>
              <TabBody
                  props={communities}
                  CustomComponent={Community}
                  fetch={fetchCommunity}
                  fetchAll={this.chooseFetchAll(communities.active[0])}
              />
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
