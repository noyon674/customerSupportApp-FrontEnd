import React from "react";
import BottomNavBar from "../../components/common/bottom_navbar/BottomNavBar";
import QuotationHeader from "../../components/quotations-comp/quotation-header/Quotation_header";
import QuotationBody from "../../components/quotations-comp/quotations-body/QuotationsBody";

function Quotations() {
  return (
    <div>
      <QuotationHeader />
      <QuotationBody />
      <BottomNavBar />
    </div>
  );
}

export default Quotations;
