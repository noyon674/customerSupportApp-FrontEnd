import React, { useEffect, useState } from "react";
import axios from "axios";

import Article from "./Article";
import "./article.scss";

function Articles() {
  const [articleData, setArticle] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BACKEND_API}articles/`,
    }).then((res) => {
      setArticle(res.data);
    });
  }, []);

  return (
    <div className="articles">
      <h4>knowledge base articles</h4>
      {articleData.map((data) => (
        <Article key={data.id} article={data} />
      ))}
    </div>
  );
}

export default Articles;
