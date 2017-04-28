/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";

import PlaylistItem from "./PlaylistItem";

const Playlists = ({ list, fetch }) => {
    return (
        <div>
          <div className="row">
            <div className="col-sm-8">Name</div>
            <div className="col-sm-4 text-left"># of Songs</div>
          </div>
          <div className="list-group">
            {list.map((item, i) => <PlaylistItem key={i} i={i} item={item} fetch={fetch} />)}
          </div>
        </div>
    );
};

export default Playlists;
