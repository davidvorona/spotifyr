/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "./actions/panelActions";
import * as utils from "./actions/utilsActions";
import * as user from "./actions/userActions";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import AppModal from "./components/AppModal";


class Main extends Component {
    componentDidMount() {
        const { fetchSpotifyUser } = this.props;
        fetchSpotifyUser();
    }

    render() {
        const { leftPanel, rightPanel } = this.props.panels;
        const { modalTitle, modalContent } = this.props.utils;
        const { changeLeftPanel, changeRightPanel } = this.props;
        return (
            <div>
              <AppModal title={modalTitle} ContentComponent={modalContent}/>
              <div className="container app-container">
                <LeftPanel leftPanel={leftPanel} changeLeftPanel={changeLeftPanel} />
                <RightPanel rightPanel={rightPanel} changeRightPanel={changeRightPanel} />
              </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        panels: state.panels,
        utils: state.utils
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions, ...utils, ...user }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);

if (module.hot) module.hot.accept();
