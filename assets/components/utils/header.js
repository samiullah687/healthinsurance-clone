const template = document.createElement("template");

template.innerHTML = `
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Wow Health Insight</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
        <link href="style2.css" rel="stylesheet" type="text/css" />
    </head>
    
`;

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default HeaderComponent;
