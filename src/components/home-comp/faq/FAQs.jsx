import React, { useState, useEffect } from "react";

import "./faq.scss";
import FAQ from "./FAQ";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";

function FAQs() {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}faqs/`)
      .then((res) => res.data)
      .then((data) => setFaqData(data));
  }, []);

  return (
    <>
      <div className="faqs">
        <h4>Frequently Asked Questions</h4>
        <div className="all-faqs">
          <Accordion defaultActiveKey="0">
            {faqData.map((item) => (
              <FAQ key={item.id} faq={item} />
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default FAQs;
