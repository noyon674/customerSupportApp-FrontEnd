import React from "react";

import Articles from "../../components/home-comp/article/Articles";
import Header from "../../components/common/header/Header";
import SearchBar from "../../components/home-comp/searchbar/SearchBar";
import Categories from "../../components/home-comp/catagory/Categories";
import FAQs from "../../components/home-comp/faq/FAQs";
import "./home.scss";
import BottomNavBar from "../../components/common/bottom_navbar/BottomNavBar";

function Home() {
  return (
    <>
      <Header />
      <h3 className="header-text">FAQ & Knowledge Base</h3>
      <SearchBar />
      <Categories />
      <FAQs />
      <Articles />
      <BottomNavBar />
    </>
  );
}

export default Home;
