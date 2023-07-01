import React from "react";
import "../css/style.css";
import "../css/style.min.css";
import { Link } from "react-router-dom";
const FAQs = () => {
  return (
    <div>
      {/* Header  */}
      <div
        className="jumbotron jumbotron-fluid page-header"
        style={{ marginBottom: "10px", marginTop: "20px" }}
      >
        <div className="container text-center py-5">
          <h1 className="text-white display-3 mt-lg-5">FAQ</h1>
          <div className="d-inline-flex align-items-center text-white">
            <p className="m-0">
              <Link className="text-white" to="/Homepage">
                Home
              </Link>
            </p>
            <i className="fa fa-circle px-3"></i>
            <p className="m-0">FAQ</p>
          </div>
        </div>
      </div>
      {/* FAQ */}
      <div className="container-fluid py-5">
          <p className="p faq Quest">
            Q: What are your most popular ice cream flavors?
          </p>
          <p className="p faq Ans">
            A: Our most popular ice cream flavors are chocolate, vanilla, and
            strawberry. However, we have a wide range of flavors to choose from,
            including unique and seasonal flavors.
          </p>
          <p className="p faq Quest">
            Q: Are your ice creams made with natural ingredients?
          </p>
          <p className="p faq Ans">
            A: Yes, our ice creams are made with natural ingredients and we use
            only high-quality dairy and locally-sourced fruits whenever
            possible.
          </p>
          <p className="p faq Quest">
            Q: Do you offer vegan or dairy-free ice cream options?
            <p className="p faq Ans">
              A: Yes, we offer vegan and dairy-free ice cream options made with
              non-dairy milk such as coconut, almond, and soy milk.
            </p>
          </p>
          <p className="p faq Quest">Q: Do you cater for events or parties?</p>
          <p className="p faq Ans">
            A: Yes, we offer ice cream catering for events and parties. Please
            contact us for more information and pricing.
          </p>
          <p className="p faq Quest">Q: Are your ice creams gluten-free?</p>
          <p className="p faq Ans">
            A: Most of our ice cream flavors are gluten-free, but some contain
            gluten-based ingredients such as cookies or brownies. Please ask our
            staff for specific flavor information.
          </p>
          <p className="p faq Quest">Q: Do you offer ice cream cakes?</p>
          <p className="p faq Ans">
            A: Yes, we offer ice cream cakes for special occasions. You can
            choose from our pre-made cake designs or customize your own cake
            with your favorite ice cream flavors and toppings.
          </p>
          <p className="p faq Quest">
            Q: What is the shelf life of your ice cream?
          </p>
          <p className="p faq Ans">
            A: Our ice creams are made fresh and have a shelf life of about two
            weeks when stored in a freezer at -18°C or below.
          </p>
        </div>
    </div>
  );
};

export default FAQs;
