const template = document.createElement("template");

template.innerHTML = `

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <link href="style2.css" rel="stylesheet" type="text/css" />

    <section class="fdb-block" style="padding-top: 0px; padding-bottom: 400px">
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-4 col-lg-4">
            <div style="padding-top: 20px; padding-bottom: 10px">
                <h6 style="padding-top: 5px;" class="text-primary">50% Complete</h6>
                <div class="progress">
    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 50%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

    </div>
            </div>
        </div>
        </div>

        <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-12 col-lg-12 text-center"  style="padding-top:25px; padding-bottom:px">
            <h3><b>What is your birth year?</b></h3>
            </div>
        </div>
        </div>

        <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-4 col-lg-4 text-center">
            <h4 style="color:#FF0000" id="required"></h4>
            <div class="input-group mt-4 mb-4">
                <input type="email" class="better-form form-control" id="birthday" placeholder="YYYY" required>
            </div>
            </div>
        </div>
        </div>


        <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-4 col-lg-4 text-center"  style="padding-top:0px">
            <button type="button" id="button1" class="button-19"><b>Next </b></button>
            </div>
        </div>
        </div>



        <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-4 col-lg-4 text-center"  style="padding-top:20px">
            <a href="tel:(800) 257-7370">
              
              <button class="button-8-new-color" role="button" id="call"> 
                  <i class="hpr-phone blink-and-stop" style="font-size: 25px; vertical-align: middle;"></i>  
                  <b>Speak to an Agent</b> <br>(800) 257-7370
              </button>
          </a>
          </div>
        </div>
      </div>


            </div>
        </div>
    </section>


`;

function handleButtonClick(document) {
  if (
    document.getElementById("birthday").value != "" ||
    document.getElementById("birthday").value != null
  ) {
    var inputVal = document.getElementById("birthday").value;

    //Match to see if inputVal is a valid year from 1900 to 2023

    let valid = inputVal.match(/^(19|20)\d{2}$/);

    if (valid) {
      localStorage.setItem("What is your birth year?", inputVal);
      console.log(localStorage.getItem("birthday"));
      window.location.href = "./q5.html";
    } else {
      document.getElementById("required").innerHTML =
        "*Please Enter a Valid Year";
      return;
    }
  } else {
    console.log("required");
    document.getElementById("required").innerHTML = "*Please Fill Out Fields";
  }
  return;
}

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

class question4Component extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.getElementById("button1").addEventListener("click", () => {
      handleButtonClick(this.shadowRoot);
    });

    this.shadowRoot.getElementById("call").addEventListener("click", () => {
      attemptedCall();
    });
  }
}

export default question4Component;
