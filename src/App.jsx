import { useState, useEffect, createContext, useRef } from "react";
import "./App.css";
import Search from "./components/Search";
import ShowData from "./components/ShowData";
import { config } from "./axios/axios";
import api from "./axios/axios";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
export const SearchTerm = createContext();

function App() {
  const [images, setImages] = useState([]);
  const [param, setParams] = useState("nature");
  const [clickedItem, setClickedItem] = useState(null);
  const backdropRef = useRef(null);

  const fetchData = async (searchterm) => {
    const data = await api.get(
      `search?query=${searchterm}&per_page=10`,
      config
    );
    setImages(data.data.photos);
  };

  useEffect(() => {
    fetchData(param);
  }, [param]);

  const handleClickAway = (event) => {
    if (backdropRef.current === event.target) {
      setClickedItem(null);
    }
  };

  const Mainpage = () => {
    return (
      <SearchTerm.Provider value={{ param, setParams, fetchData, clickedItem }}>
        <Navbar />
        <div className="container-full">
          <div>
            <h2 className="param">{param}</h2>
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
          {clickedItem && (
            <div
              className="backdrop"
              ref={backdropRef}
              onClick={handleClickAway}
            >
              <ShowData />
            </div>
          )}
        </div>
      </SearchTerm.Provider>
    );
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
