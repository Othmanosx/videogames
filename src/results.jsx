import React from "react";

export default function Results({ filtered }) {
  const getDate = (e) => {
    const date = new Date(e);
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
  };
  const rating = (e) => {
    const rating = e / 10;
    return Math.round(rating);
  };
  return (
    <div>
      {filtered.map((item) => (
        <div key={item.id} className="card">
          <div>
            <h2 className="title">{item.name}</h2>
            <div>Release Date: {getDate(item.first_release_date)}</div>
            <div className="summary">{item.summary}</div>
          </div>
          <div className="rating">{rating(item.rating)}</div>
        </div>
      ))}
    </div>
  );
}
