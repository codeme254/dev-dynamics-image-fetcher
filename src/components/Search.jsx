import { useRef, useContext } from "react";
import { SearchTerm } from "../App";

const Search = () => {
  const { param, setParams, fetchData } = useContext(SearchTerm);

  const handleSubmit = () => {
    fetchData(param);
    // setParams("");
  };

  return (
    <div className="search-container">
      <input
        type="search"
        value={param}
        onChange={(e) => {
          setParams(e.target.value);
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
