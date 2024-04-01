const template = document.createElement("template");

template.innerHTML = `

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>


<link href="style2.css" rel="stylesheet" type="text/css" />

<section class="fdb-block" style="padding-top: 0px; padding-bottom: 400px">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-4 col-lg-4">
          <div style="padding-top: 20px; padding-bottom: 10px">
            <h6 style="padding-top: 5px;" class="text-primary">31% Complete</h6>
            <div class="progress" >
<div class="progress-bar progress-bar-striped" role="progressbar" style="width: 31%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

</div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-12 col-lg-12 text-center"  style="padding-top:25px; padding-bottom:10px">
          <h3><b>What is your household size?</b></h3>
        </div>
      </div>
    </div>

    <div class="container">
    <div class=" row justify-content-center mt-4 mb-4">
        <div style="padding-left: 15px; padding-right: 15px; padding-top:0px">
          <button type="button" id="button1" class="button-box"><b>1</b></button>

</div>
        <div style="padding-left: 15px; padding-right: 15px; padding-top:0px">
          <button type="button" id="button2" class="button-box"><b>2</b></button>

</div>
      </div>
    </div>


    <div class="container">
      <div class=" row justify-content-center mt-4 mb-4">
          <div style="padding-left: 15px; padding-right: 15px; padding-top:0px">
            <button type="button" id="button3" class="button-box"><b>3</b></button>
  </div>
          <div style="padding-left: 15px; padding-right: 15px; padding-top:0px">
            <button type="button" id="button4" class="button-box"><b>4</b></button>
  </div>
        </div>
      </div>


      <div class="container">
        <div class=" row justify-content-center mt-4 mb-4">
            <div style="padding-left: 15px; padding-right: 15px; padding-top:0px">
              <button type="button" id="button5" class="button-box"><b>5</b></button>
    </div>
            <div style="padding-left: 15px; padding-right: 15px; padding-top:0px">
              <button type="button" id="button6" class="button-box"><b>6</b></button>
    </div>
          </div>
        </div>

        
        <div class="container">
          <div class=" row justify-content-center mt-4 mb-4">
              <div style="padding-left: 15px; padding-right: 15px; padding-top:0px">
                <button type="button" id="button7" class="button-box"><b>7</b></button>
      </div>
              <div style="padding-left: 15px; padding-right: 15px; padding-top:0px">
                <button type="button" id="button+" class="button-box"><b>+</b></button>
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
  localStorage.setItem("What is your household size?", text);
  console.log(localStorage.getItem("buttonText"));
  location.href = "q3.html";
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

class question2Component extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.getElementById("button1").addEventListener("click", () => {
      let text = "1";

      handleButtonClick(text);
    });

    this.shadowRoot.getElementById("button2").addEventListener("click", () => {
      let text = "2";

      handleButtonClick(text);
    });

    this.shadowRoot.getElementById("button3").addEventListener("click", () => {
      let text = "3";

      handleButtonClick(text);
    });

    this.shadowRoot.getElementById("button4").addEventListener("click", () => {
      let text = "4";

      handleButtonClick(text);
    });

    this.shadowRoot.getElementById("button5").addEventListener("click", () => {
      let text = "5";

      handleButtonClick(text);
    });

    this.shadowRoot.getElementById("button6").addEventListener("click", () => {
      let text = "6";

      handleButtonClick(text);
    });

    this.shadowRoot.getElementById("button7").addEventListener("click", () => {
      let text = "7";

      handleButtonClick(text);
    });

    this.shadowRoot.getElementById("button+").addEventListener("click", () => {
      let text = "+";

      handleButtonClick(text);
    });

    this.shadowRoot.getElementById("call").addEventListener("click", () => {
      attemptedCall();
      localStorage.callButtonPressed = "Yes";
    });
  }
}

export default question2Component;
