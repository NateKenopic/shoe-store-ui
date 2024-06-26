//import { useState } from 'react'
import './Home.css'
import { shoe_images } from '../../assets/Shoes'

function Home() {

  return (
    <>
      <div id='home-new-shoes'>
        <div>
            {
                shoe_images.map((item, index) => {
                    return <img id='home-top-image' src={item.image} alt={item.shoe_name} key={index}/>;
                })
            }
        </div>
      </div>
    </>
  )
}

export default Home
