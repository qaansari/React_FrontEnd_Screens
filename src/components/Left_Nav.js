import React from "react";
import { Link } from "react-router-dom";
function Left_Nav() {
  return (
    
    <div class="sidenav_left" >
      <div class="nav_icon" data-toggle="tooltip" data-placement="top" title="Home">
     <i class="fa fa-bars"></i>
       
      </div>
      <div class="nav_icon" data-toggle="tooltip" data-placement="top" title="BTC">
        <Link to={"/bitcoin"}>
          <i class="fa fa-btc"></i>
        </Link>
      </div>
      <div class="nav_icon" data-toggle="tooltip" data-placement="top" title="NFT">
        <Link to={"/nft"}>NFT</Link>
      </div>
      <div class="nav_icon" data-toggle="tooltip" data-placement="top" title="US/SAR/BTC">
        <i class="fa fa-exchange"></i>
      </div>
      <div class="nav_icon" data-toggle="tooltip" data-placement="top" title="Wallets">
        <i class="fa fa-pie-chart"></i>
      </div>
      <div class="nav_icon" data-toggle="tooltip" data-placement="top" title="Layout Type">
        <i class="fa fa-eye"></i>
      </div>
      <div class="nav_icon" data-toggle="tooltip" data-placement="top" title="English/Arabic">
        <i class="fa fa-globe"></i>
      </div>
      <div class="nav_icon" data-toggle="tooltip" data-placement="top" title="Info">
        <i class="fa fa-question-circle"></i>
      </div>
    </div>
    
  );
  
}
export default Left_Nav;
