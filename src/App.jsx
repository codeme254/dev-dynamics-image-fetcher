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
      {images &&
        images.map((item) => (
          <div key={item.id}>
            <img src={item.url.medium} alt={item.alt} />
            <p>
              Photo taken by{" "}
              <a href={item.photographer_url}>{item.photographer}</a>
            </p>
          </div>
        ))}
    </>
  );
}

export default App;
