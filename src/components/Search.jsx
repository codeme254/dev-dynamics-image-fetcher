import { useRef, useContext } from "react";
import { SearchTerm } from "../App";

const Search = () => {
  const { param, setParams, fetchData } = useContext(SearchTerm);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setParams(inputRef.current.value);
    console.log(inputRef.current.value);
    fetchData(param);
  };

  return (
    <div>
      <input type="search" ref={inputRef} />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );  
};

export default Search;
