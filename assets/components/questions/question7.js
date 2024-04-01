const template = document.createElement("template");

template.innerHTML = `

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>


    <link href="style2.css" rel="stylesheet" type="text/css" />

    <section class="fdb-block" style="padding-top: 5px; padding-bottom: 0px">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-4 col-lg-4">

          <h3><b>Loading quote...</b></h3>


          
        </div>
      </div>
    </div>
  </section>

    <section class="fdb-block" style="padding-top: 5px;padding-bottom: 10px">
    <div class="container">
        <div class="row justify-content-center">
        <div class="col-12 col-md-4 col-lg-4">

            <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
            </div>

        </div>

        </div>
    </div>
    </div>


        <section class="fdb-block" style="padding-top: 5px;padding-bottom: 1000px">

        </section>




    </div>

    </div>
    </div>
    </div>
    </section>

    </div>

    </div>
    </div>
    </section>

`;

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

class question7Component extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default question7Component;
