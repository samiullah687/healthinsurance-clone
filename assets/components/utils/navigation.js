const template = document.createElement("template");

template.innerHTML = `

    <head>
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
        />

        <link href="style2.css" rel="stylesheet" type="text/css" />
    </head>
    <nav class="navbar" style=" box-shadow: 0px 4px 13px 0px rgba(0, 0, 0, 0.105);" >
          <div class="container-fluid" >
            <a class="navbar-brand" style="cursor: pointer;">
              <img src="./images/logo.png" onclick="location.href='index.html'" height="45" alt="image" class="logo-image" />
            </a>
            <div class="phone-stuff" style="margin-top:5px;">
              <div style="vertical-align: middle;">
                <a href="tel:(800) 257-7370" class="phonenumberlink">
                  <div class="phone-icon" style="display: inline-block; color: #1A3A6E; font-size:36px; padding-left: 10px; line-height: 1.0; position: relative; top: 0;">
                    <i class="hpr-phone blink-and-stop"></i>
                  </div>
                  <div class="phone-text" style="display: inline-block; margin-left: 10px;">
                    <span class="phone-number ringpool" id='phone-number' style="margin: 0; font-style: normal; font-weight: 500; line-height: 24px; color: #0B389C; font-size: 27px;">
                        (800) 257-7370 
                    </span>
                    <span class="open-period" style="font-weight: 500; color: #93A0B9; line-height: 16px; text-align: right; font-size: 15px;">
                      Mon - Sat 8 AM - 8 PM EST
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </nav>
`;

class NavigationComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default NavigationComponent;
