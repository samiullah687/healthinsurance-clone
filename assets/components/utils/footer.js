const template = document.createElement("template");

template.innerHTML = `

    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/mainv2.css" />

    <style>
        a {
            color: #007bff;
        }

        *   {
            font-family: 'Poppins', sans-serif;
        }
    </style>

    <footer class="main-footer">
    <div class="container-fluid">
      <div class="disc">
        <h4>Disclaimers and Important Information</h4>
        <p>
          Plan availability varies by state, and not all brands are available in all states through the brokerages or service providers we may connect you with. Availability is subject to regulatory differences and brokerage partnerships. We encourage users to confirm the availability of specific brands with our partnered brokerages. Information is subject to change and cannot be guaranteed.
        </p>
        <br>
        <p>
          wowhealthinsight.com (owned and operated by NEW HORIZONS HEALTH GROUP LLC) is an independent marketplace and
          is not a federal or state marketplace website. wowhealthinsight.com (owned and operated by NEW HORIZONS HEALTH
          GROUP LLC) does not provide quotes or sell sell insurance directly to consumers. wowhealthinsight.com (owned and
          operated by NEW HORIZONS HEALTH GROUP LLC) is not affiliated with any exchange. wowhealthinsight.com (owned
          and operated by NEW HORIZONS HEALTH GROUP LLC) is a licensed insurance agency or broker. Accordingly, you
          should not send us (via mail or email) any sensitive information, including personal health information or
          applications. Any such communications will not be treated as confidential and will be discarded, as, in
          offering this website, we are required to comply with the standards established under 45 cfr 155.260 to
          protect the privacy and security of personally identifiable information. This website may not display all data
          on qualified health plans being offered in your state through the marketplace website. To see all available
          data on qualified health plan options in your state, visit your state marketplace website or go to the health
          insurance marketplace website at www.healthcare.gov
        </p>
        <br>
        <p>
          This website does not provide information about specific health plans, or enable visitors to obtain insurance quotes, on this website. However, if you provide your information and consent, we will transfer your information to insurance carriers and brokers that may contact you to offer Affordable Care Act (ACA) plans, short-term plans, medical indemnity plans and/or healthcare sharing ministry plans, and we will receive compensation for such transfer. The advertisements appearing on this website are placed by clients from which NEW HORIZONS HEALTH GROUP LLC or partners receives compensation, and such compensation may impact whether such advertisements appear on this website and the order in which they appear.
        </p>
        <h4 class="mt-3">
          Advertised Pricing:
        </h4>
        <p>
          A There are several factors that impact your monthly premium including but not limited to your age,
          geographical location, annual income, dependents, and the type of plan you choose. Monthly premiums do not
          include out-of-pocket costs. The advertised price may not be typical. The following parameters were used: 21
          year old adult, non-tobacco user, no children, and no available coverage through a spouse’s employer. Even
          when using the same parameters, this result is subject to change. Statistics disployed on this website,
          including but not limited to number of people helped, carrier plan amount, and product amount contain all
          licensed insurance agency brokers that we connect you with.
        </p>
        <h4 class="mt-3">
          Contact Us:
        </h4>
        <p>To contact us please email <a href="mailto:support@support-wowhealthinsight.com"
            style="display: inline-block;"> support@support-wowhealthinsight.com</a> </p>


        <div class="footer-links">

           <b><a href="/terms.html">Terms of Service</a> | <a href="/privacy.html">Privacy Policy</a> | <a href="california.html">California Privacy Notice</a> | <a href="licenses.html">Licenses</a> | <a href="donotcallme.html">Do Not Sell My Personal Information</a>| <a href="https://www.quotelab.com/marketing-partners.html">Marketing Partners</a> | <a href="https://www.quotelab.com/agent-marketing-partners.html">Agent Marketing Partners</a> | <a href="additional-partners.html">Additional Marketing Partners</a> </b>

            
        </div>


      </div><!-- /.disc -->
    </div><!-- /.container -->
  </footer><!-- /.main-footer -->
`;

class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default FooterComponent;
