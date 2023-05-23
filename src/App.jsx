
import { useState, useEffect } from "react";
import "./App.css";
import api from "./axios/axios";

function App() {
  const [images, setImages] = useState([]);

  const fetchData = async () => {
    const data = await api.get("search?query=nature&per_page=10");
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
        <div>
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
