import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "../actions/playingActions";
import PanelTab from "../components/PanelTab";  // eslint-disable-line no-unused-vars

class NowPlaying extends Component {
    render() {
        const { song, artist, album } = this.props.nowplaying;
        return (
            <div className="container-fluid widget-container">
              <h3>Now Playing</h3>
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
