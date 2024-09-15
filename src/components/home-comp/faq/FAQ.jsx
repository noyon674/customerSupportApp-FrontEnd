import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./faq.scss";

function FAQ({ faq }) {
  const { id, question, answer } = faq;
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Accordion.Item eventKey={id}>
      <Accordion.Header onClick={toggleAccordion}>{question}</Accordion.Header>
      <Accordion.Body className={isOpen ? "show" : "hide"}>
        {answer}
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default FAQ;
