/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "./actions/panelActions";
import * as utils from "./actions/utilsActions";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import AppModal from "./components/AppModal";

class Main extends Component {
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
        panels: state.panels,
        utils: state.utils
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions, ...utils }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);

if (module.hot) module.hot.accept();
