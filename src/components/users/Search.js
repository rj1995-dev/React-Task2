import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "danger");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          className="form-control text-style"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <div>
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </div>
      </form>
      <div className="btn-clear">
        {showClear && (
          <button className="btn btn-info btn-block " onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    </div>
  );
};
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};
export default Search;
