/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";

import PanelList from "./PanelList";
import refresh from "../../../public/refresh.png";

const TabBody = ({ props, CustomComponent, fetch, fetchAll }) => {
    const active = props.active[0];
    const type = props.active[1];
    const isRefresh = props.active[2];
    const tabData = props[active];

    return (
        <div className="content-container">
          {type === "list" ? <PanelList list={tabData} fetch={fetch} /> : <CustomComponent data={tabData}/>}
          {isRefresh === true ? <button className="clear-image-button" onClick={() => { fetchAll(); }}>
            <img src={refresh} className="refresh spin-div"/>
          </button> : null }
        </div>
    );
};

export default TabBody;

if (module.hot) module.hot.accept();
