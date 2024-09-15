import React from "react";
import "./quotation_body.scss";
import QuotationItem from "./QuotationItem";

function QuotationsBody() {
  const quotationData = [
    {
      id: "#12345",
      customer: "Jane Smith",
      date: "2024-05-13",
      amount: "$1200.00",
    },
    {
      id: "#12346",
      customer: "Alex",
      date: "2024-07-10",
      amount: "$1000.00",
    },
    {
      id: "#12347",
      customer: "Roburt",
      date: "2023-05-05",
      amount: "$1500.00",
    },
  ];
  return (
    <div className="quotation-body-section">
      <div className="box">
        <button>Filter</button>
      </div>
      <div className="all-quotation">
        {quotationData.map((item) => (
          <QuotationItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default QuotationsBody;
