/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import io from "socket.io-client";

import * as actions from "./actions/communitiesActions";
import * as utils from "../actions/utilsActions";
import TabBody from "../components/TabBody";
import PanelList from "../components/PanelList";
import Community from "./components/Community";
import ActiveTab from "../components/ActiveTab";
import CommunityForm from "./components/CommunityForm";
import LoadingComponent from "../components/LoadingComponent";

class Communities extends Component {
    componentDidMount() {
        const { fetchPopular, fetchMyCommunities, isLoading } = this.props;
        isLoading();
        fetchPopular();
        fetchMyCommunities();
    }

    componentDidUpdate() {
        const { isConnected } = this.props.utils;
        const comm_name = this.props.communities.current[0];
        if (isConnected) {
            const socket = io(`/${comm_name}`);
            socket.emit("USER_JOINED", { message: "User has joined the community." });
        }
    }

    chooseFetchAll(activeTab) {
        const { fetchPopular, fetchMyCommunities } = this.props;
        switch (activeTab) {
        case "popular":
            return fetchPopular;
        case "myCommunities":
            return fetchMyCommunities;
        default:
            return fetchPopular;
        }
    }

    render() {
        const { communities, utils, displayCommunityTab, fetchCommunity, chooseModalTitleContent } = this.props;
        return (
            <div className="container-fluid widget-container">
              <h3 className="col-sm-1">x</h3>
              <h3 className="col-sm-10">Communities</h3>
              <h3 className="col-sm-1 add-button"
                data-toggle="modal"
                data-target=".app-modal"
                onClick={() => { chooseModalTitleContent("Create a Community", CommunityForm); }}>+
              </h3>
              <div className="row center-block">
                <ActiveTab
                  name="Popular"
                  type={["popular", "list", true]}
                  isActive={communities.activeTab[0] === "popular"}
                  display={displayCommunityTab}
                />
                <ActiveTab
                  name="My Communities"
                  type={["myCommunities", "list", true]}
                  isActive={communities.activeTab[0] === "myCommunities"}
                  display={displayCommunityTab}
                />
                <ActiveTab
                  name="Current"
                  type={["current", "content", false]}
                  isActive={communities.activeTab[0] === "current"}
                  display={displayCommunityTab}
                />
              </div>
              { utils.isLoading ? (<LoadingComponent isLoading={utils.isLoading} />)
              : (<TabBody
                  props={communities}
                  ListComponent={PanelList}
                  CustomComponent={Community}
                  action={fetchCommunity}
                  actionAll={this.chooseFetchAll(communities.activeTab[0])}
                />)
              }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        communities: state.communities,
        utils: state.utils
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions, ...utils }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Communities);

if (module.hot) module.hot.accept();
