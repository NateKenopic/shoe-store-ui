//import { useState } from 'react'
import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar'
import './Mens.css'
import axios from 'axios';

function Mens() {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/v1/shoes')
        .then((res) => {
            return res.data;
        })
        .then((data) => {
            console.log(data);
            setShoes(data);
        });
    }, []);

  return (
    <>
        <Navbar />
        <div className="mens-shoes">
            <h1>Mens Shoes</h1>
            <div id='all-shoes'>
                {
                    shoes.map((item, index) => {
                        return (
                            <div key={index} id='shoe-card'>
                                <img src={item.IMG} alt={item.NAME} title={item.NAME} key={index} id='shoe-img'/>
                                <h3 key={index}>{item.NAME}</h3>
                                <p key={index}>{item.PRICE}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Mens
