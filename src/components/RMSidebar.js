import React, { Fragment } from "react";

function RMSidebar({ White1, Red1, Green, Red2 }) {
  return (
    <Fragment>
      <div class="row h_f">
        <div class="col-sm-6">
          <p class="p_1">{White1}</p>
        </div>
        <div class="col-sm-6">
          <p class="p_2">{Red1}</p>
        </div>
        <div class="col-sm-6">
          <p class="p_3">{Green}</p>
        </div>
        <div class="col-sm-6">
          <p class="p_2">{Red2}</p>
        </div>
      </div>
    </Fragment>
  );
}
export default RMSidebar;
