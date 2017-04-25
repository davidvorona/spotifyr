import React, { Component } from "react"; // eslint-disable-line no-unused-vars

const AlbumArt = ({ image }) => {
    return (
        <div className="container-fluid">
          <img className="album-img col-lg-8 col-lg-offset-2" src={image} alt="Album Art" />
        </div>
    );
};

export default AlbumArt;
