/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "./actions/musicActions";

class NowPlaying extends Component {
    render() {
        return (
            <div className="container-fluid widget-container">
              <h3>My Music</h3>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        nowPlaying: state.nowPlaying
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);

if (module.hot) module.hot.accept();
