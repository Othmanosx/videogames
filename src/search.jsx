import React from "react";
import { Select } from "semantic-ui-react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const countryOptions = [
  { key: "rd", value: "rd", text: "Release Date" },
  { key: "sc", value: "sc", text: "Score" },
  { key: "na", value: "na", text: "Name" },
];

export default function search({
  search,
  searchHandler,
  score,
  scoreHandler,
  clear,
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
          <div style={{ display: "flex" }}>
            <div style={{ backgroundColor: "#3e94ef", padding: "6px 9px" }}>
              <ArrowUpwardIcon />
            </div>
            <Select
              onChange={(e) => sortHandler(e)}
              style={{ width: "100%" }}
              options={countryOptions}
            />
          </div>
        </div>
        <div className="button">
          <br />
          <button onClick={clear}>Clear</button>
        </div>
      </div>
    </div>
  );
}
