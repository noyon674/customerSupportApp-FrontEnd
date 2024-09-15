import React, { useEffect, useState } from "react";
import axios from "axios";

import "./category.scss";
import Category from "./Category";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BACKEND_API}categories/`,
    }).then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <div className="categories">
      <h4>Categories</h4>
      <div className="all-categories">
        {categories.map((item) => (
          <Category key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
