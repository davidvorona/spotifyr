import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "../actions/panelActions";
import LeftPanel from "../components/LeftPanel";  // eslint-disable-line no-unused-vars
import RightPanel from "../components/RightPanel";  // eslint-disable-line no-unused-vars

class Main extends Component {
    render() {
        return (
            <div className="container app-container">
              <LeftPanel leftPanel={this.props.panels.leftPanel} />
              <RightPanel rightPanel={this.props.panels.rightPanel} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        panels: {
            leftPanel: state.panels.leftPanel,
            rightPanel: state.panels.rightPanel
        }
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);

if (module.hot) module.hot.accept();
