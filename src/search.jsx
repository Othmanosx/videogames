import React from "react";
import { Select } from "semantic-ui-react";

const countryOptions = [
  { key: "af", value: "af", text: "Release Date" },
  { key: "ax", value: "ax", text: "Score" },
  { key: "al", value: "al", text: "Name" },
];

export default function search({
  search,
  searchHandler,
  score,
  scoreHandler,
  clear,
  sort,
  sortHandler,
}) {
  return (
    <div className="filter">
      <h2>Filter Results</h2>
      <label>Name (contains)</label>
      <br />
      <input
        type="text"
        placeholder="Text String"
        onChange={searchHandler}
        value={search}
      />
      <br />
      <br />
      <div className="row">
        <div className="score">
          <label>Minimum Score</label>
          <input
            type="text"
            placeholder="1 - 10"
            onChange={(e) => scoreHandler(e)}
            value={score}
          />
        </div>
        <div className="select">
          <label>Order By</label>
          <Select
            onChange={(e) => sortHandler(e)}
            style={{ width: "100%" }}
            options={countryOptions}
          />
        </div>
        <div className="button">
          <br />
          <button onClick={clear}>Clear</button>
        </div>
      </div>
    </div>
  );
}
