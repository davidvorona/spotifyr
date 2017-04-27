/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "./actions/musicActions";

class MyMusic extends Component {
    componentDidMount() {
        console.log("Fetching music...");
        const { fetchSpotifyMusic } = this.props;
        fetchSpotifyMusic();
    }

    render() {
        console.log(this.props);
        return (
            <div className="container-fluid widget-container">
              <h3>My Music</h3>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        music: state.music
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MyMusic);

if (module.hot) module.hot.accept();
