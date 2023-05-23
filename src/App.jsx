
import { useState, useEffect, createContext } from "react";
import "./App.css";
import Search from "./components/Search";
import ShowData from "./components/ShowData";
import { config } from "./axios/axios";
import api from "./axios/axios";

export const SearchTerm = createContext()

function App() {
  const [images, setImages] = useState([]);
  const [param, setParams] = useState("nature")
  const [clickedItem, setClickedItem] = useState()

  const fetchData = async (searchterm = "nature") => {
    const data = await api.get(`search?query=${searchterm}&per_page=10`, config);
    setImages(data.data.photos);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <SearchTerm.Provider value={{ param, setParams, fetchData, clickedItem }}>
        <div>
          <Search />
        </div>
        <div className="container-full">
          <div>
            <h2>{param}</h2>
            <div className="images__container">
              {images &&
                images.map((item) => (
                  <div
                    key={item.id}
                    className="photo_box"
                    onClick={() => {
                      setClickedItem(item);
                    }}
                  >
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
          </div>
          <div>
            <ShowData />
          </div>
        </div>
      </SearchTerm.Provider>
    </>
  );
}

export default App;
