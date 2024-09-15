import React from "react";

const Article = ({ article }) => {
  const { title, content } = article;
  return (
    <>
      <div className="article">
        <p className="title">{title}</p>
        <p>{content}</p>
      </div>
    </>
  );
};

export default Article;
