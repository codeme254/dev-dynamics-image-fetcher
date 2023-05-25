/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, createContext } from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search";
export const SearchTerm = createContext();

function App() {
  const [images, setImages] = useState([]);
  const [param, setParams] = useState('');
  const config = {
    headers: {
      Authorization: `RobVDqZRreoYIwwr0yefoaS4ZbAz1r4z65wjbNLgMYzU7lKseSJc1LyF`,
    },
    withCredentials: false,
    "Acess-Control-Allow-Origin": "*",
  };

  const fetchData = async (searchterm = "nature") => {
    const url = `https://api.pexels.com/v1/search?query=${searchterm}&per_page=20`;
    const data = await axios.get(url, config);
    setImages(data.data.photos);
    console.log(data.data.photos);
    console.log("one");
  };
  // fetchData()
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <SearchTerm.Provider value={{ param, setParams, fetchData }}>
        <Search />
        <h2>{param}</h2>
        <div className="images__container">
          {images &&
            images.map((item) => (
              <div key={item.id} className="photo_box">
                <div className="image_box">
                  <img src={item.src.large} alt={item.alt} />
                </div>
                <p>
                  Photo taken by{" "}
                  <a href={item.photographer_url}>{item.photographer}</a>
                </p>
              </div>
            ))}
        </div>
      </SearchTerm.Provider>
    </>
  );
}

export default App;
