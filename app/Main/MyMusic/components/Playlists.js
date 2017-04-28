/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "../actions/musicActions";
import PlaylistItem from "./PlaylistItem";
import SongsListItem from "./SongsListItem";

// figure out how to retain state so user
// can switch tabs and return to active playlist
class Playlists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayPlaylistTracks: false
        };

        this.returnToPlaylists = this.returnToPlaylists.bind(this);
    }

    componentDidUpdate() {
        const { currentPlaylist } = this.props.music;
        if (this.state.displayPlaylistTracks === false) {
            if (currentPlaylist.length > 0) this.setState({ displayPlaylistTracks: true });
        }
    }

    returnToPlaylists() {
        const { emptyCurrentPlaylist } = this.props;
        emptyCurrentPlaylist();
        this.setState({ displayPlaylistTracks: false });
    }

    render() {
        const { playlists, currentPlaylist } = this.props.music;
        const { fetchPlaylist, addToQueue } = this.props;
        if (!this.state.displayPlaylistTracks) {
            return (
                <div>
                  <div className="row">
                    <div className="col-sm-8">Name</div>
                    <div className="col-sm-4 text-left"># of Songs</div>
                  </div>
                  <div className="list-group">
                    {playlists.map((item, i) => <PlaylistItem key={i} i={i} item={item} fetch={fetchPlaylist} />)}
                  </div>
                </div>
            );
        }
        return (
          <div>
            <div className="pull-left add-button" onClick={() => { this.returnToPlaylists(); }}>X</div>
            <div className="list-group">
              {currentPlaylist.map((item, i) => <SongsListItem key={i} i={i} item={item} fetch={addToQueue} />)}
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);

if (module.hot) module.hot.accept();
