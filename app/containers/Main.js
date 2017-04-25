import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "../actions/panelActions";
import LeftPanel from "../components/LeftPanel";  // eslint-disable-line no-unused-vars
import RightPanel from "../components/RightPanel";  // eslint-disable-line no-unused-vars

// dispatch actions to fetch initial data for state?
// use componentWillMount and componentDidReceiveProps
class Main extends Component {
    render() {
        const { leftPanel, rightPanel } = this.props.panels;
        return (
            <div className="container app-container">
                <LeftPanel leftPanel={leftPanel} />
                <RightPanel rightPanel={rightPanel} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        panels: state.panels
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);

if (module.hot) module.hot.accept();
