import React from "react";

function QuotationItem(props) {
  const { id, customer, date, amount } = props.item;
  return (
    <div className="quotation-item">
      <h6>Quotation {id}</h6>
      <p>Customer: {customer}</p>
      <p>Date: {date}</p>
      <p>Amount: {amount}</p>
    </div>
  );
}

export default QuotationItem;
