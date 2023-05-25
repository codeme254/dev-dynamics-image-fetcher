import { useRef, useContext, useState } from "react";
import { SearchTerm } from "../App";

const Search = () => {
  const { param, setParams, fetchData } = useContext(SearchTerm);
  const [userInput, setUserInput] = useState("");

  const handleSubmit = () => {
    setParams(userInput);
    fetchData(param);
  };

  return (
    <div className="search-container">
      <input
        type="search"
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
        className="input"
      />
      <button onClick={handleSubmit} className="search_button">
        Search image
      </button>
    </div>
  );
};

export default Search;
