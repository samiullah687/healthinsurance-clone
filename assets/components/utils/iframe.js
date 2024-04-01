const template = document.createElement("template");

template.innerHTML = `
    <noscript>
        <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P7ZK2JB"
            height="0"
            width="0"
            style="display: none; visibility: hidden"
        >
        </iframe>
    </noscript>
`;

class IFrameComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default IFrameComponent;
