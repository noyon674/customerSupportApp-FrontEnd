import React from "react";
import Header from "../../components/common/header/Header";
import BottomNavBar from "../../components/common/bottom_navbar/BottomNavBar";
import GeneralQuotation from "../../components/quoatation-comp/general-quotation/GeneralQuotation";

function QuotationPage() {
  return (
    <>
      <Header />
      <GeneralQuotation />
      <BottomNavBar />
    </>
  );
}

export default QuotationPage;
