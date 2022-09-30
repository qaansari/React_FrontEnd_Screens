
import TimeSeriesChart from "./TimeSeriesChart.js";
function Stats({}) {
  return (
    <div class="col-md-6">
      <div class="wrapper">
        <div class="card main_card_wrapper">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <TimeSeriesChart />
              </div>
              <div class="col-md-6">
                <div class="card lower_sub_card">
                  <div class="card-body">
                    <h5 class="card-title">Order Form</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card lower_sub_card">
                  <div class="card-body">
                    <h5 class="card-title">Orders / Wallet</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
 

            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
export default Stats;
