import React, { useState, useEffect } from 'react'

import PropertyCard from './PropertyCard'
import { PiEmpty } from "react-icons/pi";
import { BsSearch } from 'react-icons/bs';

import { buyPropertyHandle } from '../../Service/apis.js';

const Buy_HomePage = () => {
  
  const [search, setSearch] = useState('');
  const [ properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true)
  const [filteredProperty, setFilteredProperty ] = useState([])
  
  const searchChange = (e) => {
    const query = e.target.value;
    setSearch(query);
      
    const filterProperty = properties.filter((item) => {
      return item.location.toLowerCase().includes(query.toLowerCase()) || 
      item.type.toLowerCase().includes(query.toLowerCase()) || 
      item.area.toLowerCase().includes(query.toLowerCase()) ||
      item.price.toLowerCase().includes(query.toLowerCase())
    })
    setFilteredProperty(filterProperty)
  }

  useEffect(()=>{
    const fetchProperty = async () => {
      try{
        const response = await buyPropertyHandle();
        if(response.status < 300){
          setProperties(response.data)
          setFilteredProperty(response.data)
          setLoading(false)
        }
      }
      catch(err){
        console.log(err)
      }
    }
    fetchProperty()
  }, [])
  
  return (
    <section id="buy_home_wrapper" className="min-h-[calc(100vh-128px)] w-full bg-white py-6 mt-16">
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-4">Buy A Property</h3>

      <div className="w-72 relative md:w-1/3 mx-auto md:ml-auto md:mr-12 bg-yellow-100 rounded-lg shadow-[0px_0px_2px_rgba(1,1,1,0.2)] flex align-center justify-end mb-6">
        <input className="focus:shadow-md px-4 focus:outline-none w-[100%] h-10 rounded-lg" value={search} type="search" onInput={searchChange} placeholder="Search By Location, Price..."/>
        <BsSearch className="absolute right-4 top-1/2 -translate-y-1/2" />
      </div>
      
      {
        loading ? (
          <div className="grid place-content-center py-40" >
            <div className="loader" ></div>
          </div>
        ) : (
          filteredProperty.length > 0 ? (
          <div id="property_wrapper" className={`grid gap-8 px-4 md:px-8 mx-auto md:mx-auto rounded-lg sm:grid-cols-2 lg:grid-cols-3 max-w-6xl`}>
            {
              filteredProperty.map((card, index) => (
                <PropertyCard img={card.img} location={card.location} price={card.price} dataArea={card.area} dataType={card.type} type={card.type} area={card.area} key={card._id} id={card._id}/>
              ))
            }
          </div>
          ) : ( search == '' ? (
            <div className="grid place-content-center h-80" >
              <PiEmpty className="text-center mx-auto text-7xl text-red-500" />
              <h3 className="text-center text-xl" >Our Server Has Down,<br/>try later.</h3>
            </div>
            ) : (
            <div className="grid place-content-center h-80" >
              <PiEmpty className="text-center mx-auto text-7xl text-red-500" />
              <h3 className="text-center text-xl" >Found {filteredProperty.length} Result,<br/></h3>
            </div>
            )
          )
        )
      }    
    </section>
  )
}

export default Buy_HomePage