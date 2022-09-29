import { useState } from "react";
import ReactDOM from "react-dom/client";

function MyForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  //   const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    //event.preventDefault();
    alert(
      `The Name you entered was: ${name}\n The Phone you entered was: ${phone}\n The Email you entered was: ${email}\n The Address you entered was: ${address}\n`
    );
  };

  return (
    <div class="container">
      <div class="card main_card">
        <div class="card-header dap_head">Fill Out Information</div>
        <div class="card-body">
          <div class="row">
            <div class="col">
              <label>Name</label>
              <input
                type="text"
                class="form-control inp_field"
                placeholder="First name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="col">
              <label>Phone No</label>
              <input
                type="text"
                class="form-control inp_field"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <label>Email</label>
              <input
                type="text"
                class="form-control inp_field"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="col">
              <label>Address</label>
              <input
                type="text"
                class="form-control inp_field"
                placeholder="Residential Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <button
                type="button"
                onClick={handleSubmit}
                class="btn  btn_save"
              >
                Save
              </button>
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
export default MyForm;
