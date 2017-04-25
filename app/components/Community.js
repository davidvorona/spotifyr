import React, { Component } from "react"; // eslint-disable-line no-unused-vars

const Community = ({ data }) => {
    return (
        <div className="container-fluid content-container">
          <h2>{data[0]}</h2>
          <h3>Population: {data[3]}</h3>
          <br></br>
          <div className="row">
            <div className="col-lg-12">Currently playing...</div>
          </div>
          <br></br>
          <div className="row">
            <b className="col-lg-5">{data[1]}</b>
            <div className="col-lg-2">by</div>
            <b className="col-lg-5">{data[2]}</b>
          </div>
        </div>
    );
};

export default Community;
