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
                        <p>Edition 1</p>
                        <h6>KILLZUKI Collection</h6>
                        <h5>No.1</h5>
                        <div class="row justify-content-center">
                          <div class="col-md-8">
                            <p>violence i dont like it </p>
                          </div>
                          <div class="col-md-4">
                            <img
                              class="qr_code"
                              src="assets/img/images.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card center_sub_card">
                      <div class="mt-4">
                        <h3>PUBLIC MINT</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.Lorem ipsum dolor sit amet consectetur
                          adipisicing elit.
                        </p>
                        <hr />
                        <h3 class="text-center">BULK BUYS</h3>
                        <div class="row">
                          <div class="col-md-3">
                            <button class="btn btn_global">
                              <p class="buy_btn_txt">Buy</p>
                              <p class="buy_btn_txt">5</p>
                            </button>
                          </div>
                          <div class="col-md-3">
                            <button class="btn btn_global">
                              <p class="buy_btn_txt">Buy</p>
                              <p class="buy_btn_txt">10</p>
                            </button>
                          </div>
                          <div class="col-md-3">
                            <button class="btn btn_global">
                              <p class="buy_btn_txt">Buy</p>
                              <p class="buy_btn_txt">15</p>
                            </button>
                          </div>
                          <div class="col-md-3">
                            <button class="btn btn_global">
                              <p class="buy_btn_txt">Buy</p>
                              <p class="buy_btn_txt">20</p>
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
