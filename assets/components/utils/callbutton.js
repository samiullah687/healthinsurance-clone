const template = document.createElement("template");

template.innerHTML = `
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-4 col-lg-4 text-center" style="padding-top: 20px; padding-bottom: 300px">
                <a href="tel:(800) 257-7370">
                    <button class="button-8-new-color" role="button" id="call">
                        <b>📞 Speak to an Agent</b> <br />(800) 257-7370
                    </button></a
                >
            </div>
        </div>
    </div>

    <script type="module">
        // call attempt made
        const attemptedCall = async () => {
            console.log("attempting call");
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
        document.getElementById("call").addEventListener("click", () => {
            attemptedCall();
        });
    </script>
`;

class CallButtonComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default CallButtonComponent;
