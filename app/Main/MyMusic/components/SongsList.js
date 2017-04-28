/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";

import SongsListItem from "./SongsListItem";

const SongsList = ({ list, fetch }) => {
    return (
        <div className="list-group">
          {list.map((item, i) => <SongsListItem key={i} i={i} item={item} fetch={fetch} />)}
        </div>
    );
};

export default SongsList;
