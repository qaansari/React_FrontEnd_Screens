function Card({}) {
  return (
    <div class="col-md-6">
      <div class="card main_card">
        <div class="card-header dap_head">Digital Assets Platform</div>
        <div class="card-body">
          <div class="row justify-content-center">
            <div class="col-sm-12">
              <div class="card center_main_card">
                <div class="card-body">
                  <div class="row justify-content-center">
                    <div class="card center_sub_card">
                      <img
                        class="card-img-top"
                        src="assets/img/nft_center_subcard_img.png"
                        alt="Card image cap"
                      />
                      <div class="card-body cntr_card_body">
                        <h3>No. 1</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>

                    <div class="card center_sub_card">
                      <img
                        class="card-img-top"
                        src="assets/img/nft_center_subcard_img.png"
                        alt="Card image cap"
                      />
                      <div class="card-body cntr_card_body">
                        <h3>No. 1</h3>
                        <div class="row">
                          <div class="col-md-6">
                            <button
                              type="submit"
                              class="btn btn-secondary btn_buy"
                            >
                              Buy
                            </button>
                          </div>
                          <div class="col-md-6">
                            <button
                              type="submit"
                              class="btn btn-secondary btn_sell"
                            >
                              Sell
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer footer_card">
          <div class="row">
            <div class="col-md-6">
              <div class="card footer_sub_card">
                <div class="card-body">
                  <h2>Buy / Sell Margin</h2>
                  <h5>Dashboard</h5>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card footer_sub_card">
                <div class="card-body">
                  <h2>Wallet Balance</h2>
                  <h5>Dashboard</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
