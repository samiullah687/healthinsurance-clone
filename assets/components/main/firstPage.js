const template = document.createElement("template");

template.innerHTML = `

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>


        <link href="style2.css" rel="stylesheet" type="text/css" />

        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5X2C3JN"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>

        <section class="fdb-block">
        <div style="background-image: url('./images/itemhMin.png'); 
        background-size: cover;">
        <div class="container">


            
            <div class="row align-items-center" id='paddingFix'>
            <div class="col-12 col-md-6 col-lg-5" id="ABC" style="color:black">
            

                <div class="input-group mb-3">
                

                    <div class="container">
                    <div class="row justify-content-center" style="padding-top:25px;">
                        <div>
                        <h2 style="font-size: 34px" id="headlineTitle" ID="headline class"><b>Enroll in 2023 Health Insurance Today or Compare Free Quotes in Minutes</b></h2>
                        <h3 style="font-size: 27px" >Enter zip code & compare rates to see how much you can save!</h3>
                        <div class="input-group mt-4 mb-4">
                            <input type="email" style="text-align: center" class="better-form-cta form-control" id="zipcode" placeholder="Enter ZIP Code" required>
                    
                        </div>
                        </div>
                    </div>
                    </div>

                    <button type="button" id="button" class="button-19-cta"><b><b>Compare Plans</b></b></button>
                
                
                <h3 class="text-success" style="padding-top:25px; padding-bottom:px"><small><b>★★★★★ 15,431+</b> People Helped</small></h3>
                
                <div class="mx-auto p-2" style= "padding-top: 10px;" >
                    
                    <img src="./images/companies.png" class=" img-fluid" width="800px" height="800px">
      
                </div>
                
            
                </div>


            </div>
            <div class="col-12 col-md-6 ml-md-auto mt-4 mt-md-0">
            
            </div>
            </div>
        </div>
        </section>

        <section id="quote" style="padding-top: 10px;">
        <div class="container">
        <div>

        <div class="row justify-content-center">
        <div class="col text-center">
            <h6 style="color:white;" id="myDiv">
            "★★★★★ Wow Health Insight helped me find a plan for me and my daughter in no time." - John Kimmel, 48
            </h6>
        </div>
        </div>
        </div>
        </div>
        </section>

        <section class="fdb-block" style="padding-top: 95px; padding-bottom: 90px">
        <div class="container">
        <div class="row align-items-center">
            <div class="col-12 col-md-6 col-lg-5">
            <h2 style="font-size: 38px" id="headline" ID="headline class"><b><b>CHOOSE THE PLAN YOU ARE LOOKING FOR:</b></b></h2>

            
            <p style="font-size: 27px">We'll recommend a plan that's most affordable for you. Transparent pricing and benefits.</p>
            

            </div>
            <div class="col-12 col-md-6 ml-md-auto mt-4 mt-md-0">
            
                <ul class="list-group" onclick="location.href='q1.html'">
                <li class="list-group-item link" style="padding-top: 20px; padding-bottom: 20px; cursor: pointer;" onclick="location.href='q1.html'"><h3><b>➜ Individual Coverage Plans</b></h3></li>
                <li class="list-group-item link" style="padding-top: 20px; padding-bottom: 20px; cursor: pointer;" onclick="location.href='q1.html'"><h3><b>➜ Family Coverage Plans</b></h3></li>
                <li class="list-group-item link" style="padding-top: 20px; padding-bottom: 20px; cursor: pointer;" onclick="location.href='q1.html'"><h3><b>➜ Short Term Coverage Plans</b></h3></li>
                <li class="list-group-item link" style="padding-top: 20px; padding-bottom: 20px; cursor: pointer;" onclick="location.href='q1.html'"><h3><b>➜ Dental & Vision Plans</b></h3></li>
                </ul>

        

            </div>
        </div>
        </div>
        </section>

        <section class="fdb-block" style="padding-top:50px; padding-bottom:50px; background-color: #f2f7fa">
        <div class="container">
        <div class="row">
            <div class="col">
            <h2><b><a href="./q1.html"><u>Get A Free Quote And Compare In Minutes</u></a></b></h2>
            <p><span style="font-weight: 400;">If you&rsquo;re in the United States and looking to compare your health coverage options, Wow Health Insight is the only place you need to see the best plans at the best prices.&nbsp;</span>&nbsp;</p>
            <p><span style="font-weight: 400;">We have helped service people from all walks of life - Small business owners, self-employed, students, retired, and those whose job doesn&rsquo;t provide health coverage.</span></p>
            <h2><b><a href="./q1.html"><u>Obamacare / ACA Options</u></a></b></h2>
            <p><span style="font-weight: 400;">Obamacare, also known as the Affordable Care Act (ACA), is a comprehensive healthcare reform law enacted in March 2010, aimed at improving the accessibility, affordability, and quality of healthcare in the United States.</span></p>
            <p><span style="font-weight: 400;">The primary goal of the ACA is to provide affordable health insurance coverage to millions of uninsured Americans by offering financial assistance, and implementing consumer protections.</span></p>
            <p><span style="font-weight: 400;">Under the ACA, health insurance is available through the Health Insurance Marketplace.</span></p>
            <h2><b><a href="./q1.html"><u>Bronze, Silver, Gold, Platinum</u></a></b></h2>
            <p><span style="font-weight: 400;">These plans are categorized into four different tiers: bronze, silver, gold, and platinum. The bronze, silver, and gold plans offer different levels of coverage and pricing to cater to the diverse needs of consumers.</span></p>
            <p><span style="font-weight: 400;">Bronze plans typically have lower monthly premiums but higher out-of-pocket costs, making them a suitable option for those who are relatively healthy and do not expect to use many healthcare services. Silver and gold plans have higher monthly premiums but lower out-of-pocket expenses, making them a better fit for those who anticipate using more healthcare services or have chronic conditions.</span></p>
            <h2><b><a href="./q1.html"><u>PPO</u></a></b></h2>
            <p><span style="font-weight: 400;">One of the most popular options is a Preferred Provider Organization (Also known as PPO). PPO includes individual and family health coverage options.&nbsp;</span></p>
            <p><span style="font-weight: 400;">Healthcare is provided by a network of providers who are partnered with the PPO plan and offer a substantial discount to their normal rates. Members can also receive service from providers outside of the network for a higher out-of-pocket cost.&nbsp;</span></p>
            <h2><b><a href="./q1.html"><u>HMO</u></a></b></h2>
            <p><span style="font-weight: 400;">HMOs (Health Maintenance Organizations) are a lower cost alternative to PPOs, offering less flexibility but also lower premiums. HMO members must receive care from doctors, specialists and hospitals that are within the HMO&rsquo;s network. Unlike a PPO.</span></p>
            <p><span style="font-weight: 400;">You select a primary care physician, or PCP, who serves as your primary contact for all of your healthcare needs. They must also be consulted in order to see a specialist.</span></p>
            <h2><b><a href="./q1.html"><u>Short Term Insurance</u></a></b></h2>
            <p><span style="font-weight: 400;">Short term health insurance or limited duration insurance refers to health insurance plans that are temporary, typically several months to a year.</span></p>
            <p><span style="font-weight: 400;">They are a great solution when you're between jobs, a recent college graduate, or waiting for group coverage to start. Short term health insurance policies always have a termination date that you choose when you apply.</span></p>
            <h2><b><a href="./q1.html"><u>Long Term Insurance</u></a></b></h2>
            <p><span style="font-weight: 400;">Long term health insurance or long duration insurance refers to health insurance plans that are meant to be held for a long time, typically at least one year or longer.</span></p>
            <p><span style="font-weight: 400;">They are a great solution when you have a stable job or situation that you know you'll be in for a long time. There are plans available where rates do not increase for some time.</span></p>
           



            <p></p>
            <p>&nbsp;</p>
            <h4><strong>What should I ask the agent when I speak to them on the phone to ensure I get the plan I need?</strong></h4>
            <ul>
                <li>Is this a managed care or an indemnity plan?</li>
                <li>Does my doctor accept this type of coverage? What about my nearest hospitals?</li>
                <li>Does this plan have a deductible? If so, how much is it and when does it apply?</li>
                <li>Are name brand or generic medications covered under this plan? If so then by how much?</li>
                <li>How much do I have to pay out-of-pocket monthly for this coverage option?</li>
                <li>Is there a co-pay for doctor visits? If so, what is it? Is there a separate co-pay for specialists?</li>
                <li>Does this plan cover dental care, vision, and any other special treatments?</li>
                <li>Does this plan have a deductible? How much is it and when does it apply?</li>
            </ul>
            <div id="mouseposition-extension-element-full-container" style="position: fixed; inset: 0px; pointer-events: none; z-index: 2147483647; font-weight: 400;">&nbsp;

            </div>
                <div id="mouseposition-extension-element-full-container" style="position: fixed; inset: 0px; pointer-events: none; z-index: 2147483647; font-weight: 400;">&nbsp;

                </div>
            </div>
        </div>
        </div>
        </section>



        <section class="fdb-block" style="padding-top:50px; padding-bottom:150px; background-color: #f0f6fa">
        <div class="container">
        <div class="row justify-content-center">
            <div class="col col-md-8 text-center">
            
                <button type="button" id="button2" class="button-19-cta"><b>Compare Plans</b></button>
            
            </div>
        </div>
        </div>
        </section>


`;

const storeZipcode = async (document) => {
  const zipcodeInput = document.getElementById("zipcode");
  const zipcodeValue = zipcodeInput.value;

  if (zipcodeValue == "") {
    window.location.href = "/q1.html";
    return;
  }

  let data = await fetch("/get-timezone", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      zipcode: zipcodeValue,
    }),
  });

  let response = await data.json();

  if (response) {
    localStorage.setItem("Zipcode", zipcodeValue);
    localStorage.setItem("timezone", response.timezone);
    window.location.href = "/q1.html";
  } else {
    localStorage.setItem("Zipcode", " ");
    localStorage.setItem("timezone", " ");
    window.location.href = "/q1.html";
  }
};

function appendToLocalStorage(document) {
  localStorage.removeItem("Zipcode");
  localStorage.removeItem("When do you need coverage?");
  localStorage.removeItem("What is your household size?");
  localStorage.removeItem("What is your annual household income");
  localStorage.removeItem("What is your birth year?");
  localStorage.removeItem("What is your gender?");
  localStorage.removeItem("Are dental or vision plans important to you?");
  localStorage.removeItem("Name");
  localStorage.removeItem("Email");
  localStorage.removeItem("carrier");
  localStorage.removeItem("Phone Number");
  localStorage.removeItem("certificate");
  localStorage.removeItem("callButtonPressed");
  localStorage.removeItem("timezone");

  const urlParams = new URLSearchParams(window.location.search);
  const url = decodeURIComponent(urlParams.get("url")).replace(/\.html.*$/, "");
  const fileName = url.split("/").pop(); // get the last part of the URL path
  //If filename contains "q-", do not display the headline

  const formattedName = fileName
    .replace(/-/g, " ")
    .replace(/q /g, "")
    .replace(/q-/g, "")
    .replace(/_/g, " ")
    .replace(/.html/g, "")
    .replace(/%20/g, " ")
    .replace(/%3F/g, "?")
    .replace(/%3D/g, "=")
    .replace(/%2C/g, ",")
    .replace(/%2F/g, "/")
    .replace(/%3A/g, ":")
    .replace(/%26/g, "&")
    .replace(/%23/g, "#")
    .replace(/%24/g, "$")
    .replace(/%25/g, "%")
    .replace(/%3B/g, ";")
    .replace(/%2B/g, "+")
    .replace(/%40/g, "@");

  const headline = document.getElementById("headlineTitle");

  //If the headline contains "q-", do not display the headline

  if (
    formattedName === null ||
    (!formattedName.toLowerCase().includes("null") && !fileName.includes("q-"))
  ) {
    let formattedNameCapitalLetters = formattedName
      .split(" ")
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");

    headline.innerHTML = `<b><b>${formattedNameCapitalLetters}</b></b>`;

    fetch("/title", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: `${formattedName} - ${window.location.href}`,
      }),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });

    console.log("/localStorage", localStorage);
  }

  console.log("urlParams, formattedName", window.location.href, formattedName);
  localStorage.setItem("Url", window.location.href);
  localStorage.setItem("Title", formattedName);
  // 8310012039587
  let code = "";
  for (let i = 0; i < 10; i++) {
    code += Math.floor(Math.random() * 10);
  }
  if (!localStorage.getItem("anonID")) {
    localStorage.setItem("anonID", code);
  }
}

class FirstPageComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    appendToLocalStorage(this.shadowRoot);
    this.shadowRoot.querySelector("#button").addEventListener("click", () => {
      storeZipcode(this.shadowRoot);
    });

    this.shadowRoot.querySelector("#button2").addEventListener("click", () => {
      window.location.href = "/q1.html";
    });
  }
}

export default FirstPageComponent;
