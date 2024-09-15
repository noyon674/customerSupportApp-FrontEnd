import React from "react";
import "./generate_quotation.scss";

function GeneralQuotation() {
  const data = [
    {
      id: 1,
      name: "one",
      amount: "$100",
    },
    {
      id: 2,
      name: "two",
      amount: "$200",
    },
    {
      id: 3,
      name: "three",
      amount: "$300",
    },
  ];
  return (
    <div className="main-quoat">
      <div className="new-quoat">
        <h2>Generate New Quotation</h2>
        <div className="form">
          <form action="">
            <div className="input">
              <label htmlFor="">Client Name</label> <br />
              <input type="text" />
            </div>
            <div className="input">
              <label htmlFor="">Project Description</label> <br />
              <input type="text" />
            </div>
            <div className="input">
              <label htmlFor="">Quotation Amount</label> <br />
              <input type="text" />
            </div>
            <div className="input">
              <button>Generate Quotation</button>
            </div>
          </form>
        </div>
      </div>
      <div className="related-quot">
        <h3>Related Quotation</h3>
        {data.map((data) => {
          return (
            <article key={data.id} className="quotation">
              <h6>Quotation: {data.id}</h6>
              <p>Client: {data.name}</p>
              <p>Amount: {data.amount}</p>
              <button>Send</button>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default GeneralQuotation;
