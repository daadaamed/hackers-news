import React from "react";

const SearchAuthor = (props) => {
  return (
    <div className="header">
      <div className="sub-header">
        <div className="searchMovie">
          <input
            onChange={props.handleSearch}
            type="text"
            placeholder="Look for an author ..."
          />
        </div>
      </div>
    </div>
  );
};

export default SearchAuthor;
