import './App.css';
import { useState } from 'react';
import { data } from './data';

function App() {
  const [hotels, setHotels] = useState(data);
  const [showText, setShowText] = useState(false)

  const removeHotel = (id) => {
    let newHotels = hotels.filter(hotel => hotel.id !== id)
    setHotels(newHotels)
  }

  const showTextClicked = (item) => {
    item.showMore = !item.showMore
    setShowText(!showText)
  }

   return (
    <div className='App'>
      <h1>nyc top {hotels.length} hotels</h1>
      {hotels.map(item => {
        const {id, hotelName, description, image, source, showMore} = item

        return (
          <div className='container' key={id}>
            <h2>{id} - {hotelName}</h2>
            <p>
              {showMore ? description : description.substring(0, 220) + '...'}
              <button onClick={() => showTextClicked(item)}>{showMore ? 'show less' : 'show more'}</button>
            </p>
            <img src={image} alt={hotelName}/>
            <p>Source: {source}</p>
            <button className='btn' onClick={() => removeHotel(id)}>remove</button>
          </div>
        )
      })}

    </div>
  )
}

export default App;
