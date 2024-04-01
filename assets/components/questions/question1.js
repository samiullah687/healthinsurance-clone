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
        <h6 style="padding-top: 5px;" class="text-primary">18% Complete</h6>
        <div class="progress" >
<div class="progress-bar progress-bar-striped" role="progressbar" style="width: 18%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

</div>
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="col-12 col-md-12 col-lg-12 text-center"  style="padding-top:25px; padding-bottom:10px">
      <h3><b>When do you need coverage?</b></h3>
    </div>
  </div>
</div>


<div class="container">
  <div class="row justify-content-center">
    <div class="col-12 col-md-4 col-lg-4 text-center">
      <button type="button" id="button1" class="button-19"><b>Immediately</b></button>
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="col-12 col-md-4 col-lg-4 text-center"  style="padding-top:20px">
      <button type="button" id="button2" class="button-19"><b>Within 2 Weeks</b></button>
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="col-12 col-md-4 col-lg-4 text-center"  style="padding-top:20px">
      <button type="button" id="button3" class="button-19"><b>After 2 Weeks</b></button>
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

class question1Component extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.getElementById("button1").addEventListener("click", () => {
      let text = this.shadowRoot.getElementById("button1").textContent;

      localStorage.setItem("When do you need coverage?", text);

      let code = "";
      for (let i = 0; i < 10; i++) {
        code += Math.floor(Math.random() * 10);
      }
      if (!localStorage.getItem("anonID")) {
        localStorage.setItem("anonID", code);

        location.href = "q2.html";
      } else {
        location.href = "q2.html";
      }
    });

    this.shadowRoot.getElementById("button2").addEventListener("click", () => {
      let text = this.shadowRoot.getElementById("button2").textContent;

      localStorage.setItem("When do you need coverage?", text);

      let code = "";
      for (let i = 0; i < 10; i++) {
        code += Math.floor(Math.random() * 10);
      }
      if (!localStorage.getItem("anonID")) {
        localStorage.setItem("anonID", code);

        location.href = "q2.html";
      } else {
        location.href = "q2.html";
      }
    });

    this.shadowRoot.getElementById("button3").addEventListener("click", () => {
      let text = this.shadowRoot.getElementById("button3").textContent;

      localStorage.setItem("When do you need coverage?", text);

      let code = "";
      for (let i = 0; i < 10; i++) {
        code += Math.floor(Math.random() * 10);
      }
      if (!localStorage.getItem("anonID")) {
        localStorage.setItem("anonID", code);

        location.href = "q2.html";
      } else {
        location.href = "q2.html";
      }
    });

    this.shadowRoot.getElementById("call").addEventListener("click", () => {
      attemptedCall();
      localStorage.callButtonPressed = "Yes";
    });
  }
}

export default question1Component;
