import React, { Fragment } from 'react';
import RMSidebar from './RMSidebar.js';

function RightMainSidebar({}) {
    const services =[{White1:"009231.132545", Red1:1009231.132545},
    {White1:"009231.132545", Red1:1009231.132545},
    {White1:"009231.132545", Red1:1009231.132545},
    {White1:"009231.132545", Red1:1009231.132545},
    {White1:"009231.132545", Red1:1009231.132545},
    {White1:"009231.132545", Red1:1009231.132545},
    {White1:"009231.132545", Red1:1009231.132545},
    {White1:"009231.132545", Red1:1009231.132545},
    {White1:"009231.132545", Red1:1009231.132545},
    {White1:"009231.132545", Red1:1009231.132545},
    {Green:1009231.132545,Red2:1009231.132545},
    {Green:1009231.132545,Red2:1009231.132545},
    {Green:1009231.132545,Red2:1009231.132545},
    {Green:1009231.132545,Red2:1009231.132545},
    {Green:1009231.132545,Red2:1009231.132545},
    
    ];




  return (
    
  <div class="col-md-3">
      <div class="Main_sidenav_right">
      <div class="container h_1">   
                    <h3>History</h3>
                  </div>
                  <h5 class="hed">Order Book</h5>
                  <div class="row m_head">
                  <div class="col-sm-6">
                    <p>PRICE (USD)</p>
                  </div>
                  <div class="col-sm-4">
                    <p>AMOUNT(UTC)</p>
                  </div>
                </div>

<div class="row">

{services.map((x) => (
      <RMSidebar
      // Main1={x.Main1}
      // Main2={x.Main2}
      // Heading1={x.Heading1}
      // Heading2={x.Heading2}
      White1={x.White1}
      Red1={x.Red1}
      // Red2={x.Red2}
      Green={x.Green}
      Red2={x.Red2}
      

      />
    ))}

</div>

    </div>
         </div>
    

  );
}
export default RightMainSidebar;