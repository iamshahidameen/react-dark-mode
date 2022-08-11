import React from 'react';
import moment from 'moment';
const Article = ({ id, title, snippet, date, length }) => {
  console.log(JSON.stringify(date));
  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{moment(date).format('MMM dddd Do, YYYY')}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
