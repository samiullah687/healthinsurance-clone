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
                <h6 style="padding-top: 5px;" class="text-primary">43% Complete</h6>
                <div class="progress" >
    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 43%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

    </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-12 col-lg-12 text-center"  style="padding-top:25px; padding-bottom:10px">
          <h3><b>What is your annual household income?</b></h3>
        </div>
      </div>
    </div>



    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-4 col-lg-4 text-center"  style="padding-top:0px">
          <button type="button" id="button1" class="button-20"><b>Below $16,000</b></button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-4 col-lg-4 text-center"  style="padding-top:10px">
          <button type="button" id="button2" class="button-20"><b>$16,000 - $21,000</b></button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-4 col-lg-4 text-center"  style="padding-top:10px">
          <button type="button" id="button3" class="button-20"><b>$21,000 - $31,000</b></button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-4 col-lg-4 text-center"  style="padding-top:10px">
          <button type="button" id="button4"class="button-20"><b>$31,000 - $52,000</b></button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-4 col-lg-4 text-center"  style="padding-top:10px">
          <button type="button" id="button5" class="button-20"><b>$52,000 - $71,000</b></button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-4 col-lg-4 text-center"  style="padding-top:10px">
          <button type="button" id="button6" class="button-20"><b>Over $71,000</b></button>
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

function handleButtonClick(text) {
  localStorage.setItem("What is your annual household income", text);
  console.log(localStorage.getItem("buttonText"));
  location.href = "q4.html";
  //   alert(text);
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

class question3Component extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.getElementById("button1").addEventListener("click", () => {
      handleButtonClick("Below $16,000");
    });

    this.shadowRoot.getElementById("button2").addEventListener("click", () => {
      handleButtonClick("$16,000 - $21,000");
    });

    this.shadowRoot.getElementById("button3").addEventListener("click", () => {
      handleButtonClick("$21,000 - $31,000");
    });

    this.shadowRoot.getElementById("button4").addEventListener("click", () => {
      handleButtonClick("$31,000 - $52,000");
    });

    this.shadowRoot.getElementById("button5").addEventListener("click", () => {
      handleButtonClick("$52,000 - $71,000");
    });

    this.shadowRoot.getElementById("button6").addEventListener("click", () => {
      handleButtonClick("Over $71,000");
    });

    this.shadowRoot.getElementById("call").addEventListener("click", () => {
      attemptedCall();
      localStorage.callButtonPressed = "Yes";
    });
  }
}

export default question3Component;
