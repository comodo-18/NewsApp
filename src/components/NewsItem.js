import React from "react";

function NewsItem(props) {
  const datee = new Date(props.date).toDateString();

  return (
    <div className="card">
      <img src={props.imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text">
          <small className="text-muted">
            {props.author} on {datee}
          </small>
        </p>
        <a href={props.newsUrl} className="btn btn-sm btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
