import React from "react";
import "./Style.css";
const Place = () => {
  return (
    <div className="Container">
      <div className="placeContainer">
        <div className="row">
          <div className="col">Place</div>
          <div className="col">
            <input type="text" name="" id="" />
          </div>
        </div>
        <div className="row">
          <div className="col">Districr</div>
          <div className="col">
            <select name="District" id="dist">
              <option value="sample1">sample1</option>
              <option value="" selected ></option>
            </select>
          </div>
        </div>
        <div className="row">
          <input type="submit" value="Save" className="btn" />
        </div>
      </div>
    </div>
  );
};
export default Place;
