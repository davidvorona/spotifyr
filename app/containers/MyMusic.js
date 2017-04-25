/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "../actions/musicActions";
import AlbumArt from "../components/AlbumArt";

class NowPlaying extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container-fluid widget-container">
              <h3>My Music</h3>
              <AlbumArt image={image} />
              <hr></hr>
              <div>Song: {song}</div>
              <div>Artist: {artist}</div>
              <div>Album: {album}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        nowplaying: state.nowplaying
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);

if (module.hot) module.hot.accept();
