import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [images, setImages] = useState([]);
  const config = {
    headers: {
      Authorization: 'RobVDqZRreoYIwwr0yefoaS4ZbAz1r4z65wjbNLgMYzU7lKseSJc1LyF'
    },
    withCredentials: false
  }
  const url = "https://api.pexels.com/v1/search?query=nature&per_page=10"
  
  const fetchData = async () => {
    const data = await axios.get(url, config);
    setImages(data.data.photos)
    console.log(data.data.photos);
  }
  // fetchData()
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {
       images && images.map((item) => (
          <div key={item.id}>
            <img src={item.url} alt={item.alt} />
            <p>Photo taken by <a href={item.photographer_url}>{item.photographer}</a></p>
          </div>
       ))

      }
    </>
  )
}

export default App
