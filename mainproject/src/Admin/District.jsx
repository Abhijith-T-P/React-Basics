import React from "react";
import "./Style.css";

const District = () => {
  return (
    <div className="Container">
      <div className="districtContainer">
        <div className="row">
          <div className="col">District</div>
          <div className="col">
            <input type="text" />
          </div>
        </div>
        <div className="row">
          <input type="submit" value={'Save'} className="btn"/>
        </div>
      </div>
    </div>
  );
};

export default District;
