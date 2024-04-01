const template = document.createElement("template");

template.innerHTML = `

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>


    <link href="style2.css" rel="stylesheet" type="text/css" />

    <section class="fdb-block" style="padding-top: 0px; padding-bottom: 400px">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6 col-lg-6">
          <div style="padding-top: 20px; padding-bottom: 10px">
            <h6 style="padding-top: 5px;" class="text-primary">97% Complete</h6>
            <div class="progress" >
<div class="progress-bar progress-bar-striped" role="progressbar" style="width: 97%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

</div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6 col-lg-6">

          <h2><b>Enter your information now to see your quote.</h2>
          <h4 style="color:#FF0000" id="required"></h4>

        </div>
      </div>
    </div>

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-6 col-lg-6">
                      <div class="input-group mt-4 mb-4">
            <input type="name" class="form-control form-control-lg" id="name" placeholder="First and Last Name" required>
          </div>
      <div class="input-group mt-4 mb-4">
        <input type="email" class="form-control form-control-lg" id="email" placeholder="Email Address" required>
      </div>
      <div class="input-group mt-4 mb-4">
        <input type="phone" class="form-control form-control-lg" id="phone" placeholder="Phone Number" required>
        <form>
          <input type="hidden" id="xxTrustedFormPingUrl" name="xxTrustedFormPingUrl" value="" />
        </form>
        
      </div>      </div>      </div>      </div>


    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6 col-lg-6"  style="padding-top:5px">
          <div>
            <h5 class="text-success">★★★★★ Over 15,431+ people helped</h5>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6 col-lg-6 text-center"  style="padding-top:20px">
          <button type="button" id="button1" class="button-19"><b>Get Your Health Quotes</b></button>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6 col-lg-6"  style="padding-top:15px">
          <div>
            <p class="text-secondary"><small>By entering a phone number and email address and submitting this form, you represent that you are at least 18 years old and agree to our Privacy Policy and Terms of Use. You also authorize New Horizons Health Group, LLC, and/or these marketing partners to contact you for marketing/telemarketing purposes at the number and email provided. You may revoke consent at anytime.</small></p>

          </div>
        </div>
      </div>
    </div>


              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-4 col-lg-4 text-center"  style="padding-top:20px">
                    <a href="tel:(800) 257-7370"> <button class="button-8-new-color" role="button" id="call"><b>📞 Speak to an Agent</b> <br>(800) 257-7370</button></a>
                  </div>
                </div>
              </div>


        </div>
      </div>
  </section>

    <div id="trustedform"></div>

`;

const validatePhoneNumber = async (document) => {
  try {
    const phoneNumber = document.getElementById("phone").value;

    const response = await fetch("/phone-number", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber: phoneNumber }),
      keepalive: true,
    });
    const data = await response.json();
    console.log("data response is number valid", data);

    if (data) {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
      var carrier = data.carrier;
      var certificate = document.getElementById("xxTrustedFormCertUrl_0").value;

      localStorage.setItem("Name", name);
      localStorage.setItem("Email", email);
      localStorage.setItem("carrier", carrier);
      localStorage.setItem("Phone Number", phone);
      localStorage.setItem("certificate", certificate);

      console.log("Phone number is valid!");

      window.location.href = "/quote.html";
    } else {
      console.log("Phone number is invalid.");
      document.getElementById("required").innerHTML =
        "*Please Enter A Valid Phone Number*";
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const sendData = async (
  name,
  email,
  phone,
  certificate,
  url,
  zipcode,
  areDentalVisionPlansImportant,
  annualHouseholdIncome,
  birthYear,
  gender,
  householdSize,
  whenDoYouNeedCoverage,
  anonId,
  carrier,
  timezone,
  callButtonPressed
) => {
  try {
    let res = await fetch("/recieve", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        carrier: carrier,
        url: window.location.href,
        zipcode: zipcode,
        areDentalVisionPlansImportant: areDentalVisionPlansImportant,
        annualHouseholdIncome: annualHouseholdIncome,
        gender: gender,
        birthYear: birthYear,
        householdSize: householdSize,
        whenDoYouNeedCoverage: whenDoYouNeedCoverage,
        anonId: anonId,
        certificate: certificate,
        timezone: timezone,
        callButtonPressed: callButtonPressed,
      }),
      keepalive: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// call attempt made
const attemptedCall = async () => {
  let res = await fetch("/recieve", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      payload: "Call Button Pressed",
    }),
  });
};

let code = "";
for (let i = 0; i < 10; i++) {
  code += Math.floor(Math.random() * 10);
}
if (!localStorage.getItem("anonID")) {
  localStorage.setItem("anonID", code);
}

class question8Component extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    trustedForm();

    this.shadowRoot.getElementById("button1").addEventListener("click", () => {
      var name = this.shadowRoot.getElementById("name").value;
      var email = this.shadowRoot.getElementById("email").value;
      var phone = this.shadowRoot.getElementById("phone").value;
      var certificate = this.shadowRoot.getElementById(
        "xxTrustedFormCertUrl_0"
      ).value;

      let phoneNumber = this.shadowRoot.getElementById("phone").value;
      let url = localStorage.getItem("Url") || " ";
      let zipcode = localStorage.getItem("Zipcode") || " ";
      let areDentalVisionPlansImportant =
        localStorage.getItem("Are dental or vision plans important to you?") ||
        " ";
      let annualHouseholdIncome =
        localStorage.getItem("What is your annual household income") || " ";
      let birthYear = localStorage.getItem("What is your birth year?") || " ";
      let gender = localStorage.getItem("What is your gender?") || " ";
      let householdSize =
        localStorage.getItem("What is your household size?") || " ";
      let whenDoYouNeedCoverage =
        localStorage.getItem("When do you need coverage?") || " ";
      let anonId = localStorage.getItem("anonID") || " ";
      let carrier = localStorage.getItem("carrier") || " ";
      let timezone = localStorage.getItem("timezone") || " ";
      let callButtonPressed = localStorage.getItem("callButtonPressed") || " ";

      sendData(
        name,
        email,
        phone,
        certificate,
        url,
        zipcode,
        areDentalVisionPlansImportant,
        annualHouseholdIncome,
        birthYear,
        gender,
        householdSize,
        whenDoYouNeedCoverage,
        anonId,
        carrier,
        timezone,
        callButtonPressed
      );

      console.log("sent data");

      if (
        this.shadowRoot.getElementById("email").value != "" &&
        this.shadowRoot.getElementById("phone").value != ""
      ) {
        // second check
        console.log("phoneNumber", phone);

        validatePhoneNumber(this.shadowRoot);
      } else {
        console.log("required");
        document.getElementById("required").innerHTML =
          "*Please Fill Out Fields";
      }
    });

    this.shadowRoot.getElementById("call").addEventListener("click", () => {
      attemptedCall();
    });
  }
}

export default question8Component;
