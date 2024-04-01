const template = document.createElement("template");

template.innerHTML = `

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>


<link href="style2.css" rel="stylesheet" type="text/css" />

<section class="fdb-block" style="padding-bottom: 500px; padding-top: 150px">
<div class="container">
    <div class="row">
        <div class="col-12 col-lg-12 col-xl-12">
            <h2 class= "quote-plan-options">
                We have <span class="click-listing-count">7</span>
                recommended plan options for you.
            </h2>
            <p class= "quote-giving-call">
                Our Wow Health Insight team is giving you a call now.
            </p>
            <p class= "quote-connected">
                <strong>If you’d like to be connected directly to your licensed agent, click here:</strong>
            </p>
            <p style="text-align:center; margin-bottom:50px;">
                <a href="tel:(800) 257-7370">

                    <button class="button-8-new-color" role="button" id="call"> 
                        <i class="hpr-phone blink-and-stop" style="font-size: 25px; vertical-align: middle;"></i>  
                        <b>Speak to an Agent</b> <br>(800) 257-7370
                    </button>
                </a>
            </p>
        </div>
    </div>
</div>
</section>


`;

const verifyCertificate = async () => {
  let certificate = localStorage.getItem("certificate");

  let res = await fetch("/verify-certificate", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      certificate: certificate,
    }),
  });
};

verifyCertificate();

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

const sendUserData = async () => {
  try {
    // localStorage.callButtonPressed = 'Yes'
    // Get variables from local storage and replace any undefined values with a space
    const callButtonPressed = localStorage.getItem("callButtonPressed") || " ";
    const title = localStorage.getItem("Title") || " ";
    const url = localStorage.getItem("Url") || " ";
    const zipcode = localStorage.getItem("Zipcode") || " ";
    const areDentalVisionPlansImportant =
      localStorage.getItem("Are dental or vision plans important to you?") ||
      " ";
    const email = localStorage.getItem("Email") || " ";
    const name = localStorage.getItem("Name") || " ";
    const phoneNumber = localStorage.getItem("Phone Number") || " ";
    const annualHouseholdIncome =
      localStorage.getItem("What is your annual household income") || " ";
    const birthYear = localStorage.getItem("What is your birth year?") || " ";
    const gender = localStorage.getItem("What is your gender?") || " ";
    const householdSize =
      localStorage.getItem("What is your household size?") || " ";
    const whenDoYouNeedCoverage =
      localStorage.getItem("When do you need coverage?") || " ";
    const anonId = localStorage.getItem("anonID") || " ";
    const certificate = localStorage.getItem("certificate") || " ";
    const carrier = localStorage.getItem("carrier") || " ";
    const timezone = localStorage.getItem("timezone") || " ";

    // Create object to send in fetch request body
    const data = {
      callButtonPressed: callButtonPressed,
      title: title,
      url: url,
      zipcode: zipcode,
      areDentalVisionPlansImportant: areDentalVisionPlansImportant,
      email: email,
      name: name,
      phoneNumber: phoneNumber,
      annualHouseholdIncome: annualHouseholdIncome,
      birthYear: birthYear,
      gender: gender,
      householdSize: householdSize,
      whenDoYouNeedCoverage: whenDoYouNeedCoverage,
      anonId: anonId,
      certificate: certificate,
      carrier: carrier,
      timezone: timezone,
    };

    // Send fetch request to /formfill endpoint
    fetch("/formfill", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Formfill response:", data);
      })
      .catch((error) => {});
  } catch (error) {
    console.error("Formfill error:", error);
  }
};

sendUserData();

class FirstPageComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.getElementById("call").addEventListener("click", () => {
      attemptedCall();
      localStorage.setItem("callButtonPressed", "Yes");
    });
  }
}

export default FirstPageComponent;
