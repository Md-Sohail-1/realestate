import { useState, useEffect } from 'react';
import React from 'react'
import { useParams } from 'react-router'
import { viewPropertyByIdHandle } from '../../Service/apis';
import { noImage } from '../../Service/noImage';
import { BASE_URL } from '../../Service/helper';
import { PiEmpty } from 'react-icons/pi'

const PropertyViewPage = () => {
  const { id } = useParams();
  const [ viewProperty, setViewProperty ] = useState('');
  const [ loading, setLoading ] = useState(true);
  
  const fetchView = async () => {
    try{
      const response = await viewPropertyByIdHandle(id);
      if(response.status < 300){
        setViewProperty(response.data);
        setLoading(false)
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  
  useEffect(()=>{
    fetchView()
  }, [])
  
  return (
    <main id="main" className="min-h-[calc(100vh-64px)] max-h-auto top-16 relative w-full mt-0 bg-cover bg-center">
      <section className="w-full py-10 px-4 sm:px-6 lg:px-10">
      {
         loading ? (
          <div className="grid place-content-center py-40 h-96" >
            <div className="loader" ></div>
          </div>
        ) : (
          viewProperty !== '' ? (
            <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl overflow-hidden">
    
          <div className="w-full h-56 sm:h-72 md:h-96">
            <img loading="lazy" src={viewProperty.img === 'none' ? noImage : `${BASE_URL}/${viewProperty.img}`} alt="Property Image" className="w-full h-full object-cover object-center" />
          </div>

          <div className="p-5 sm:p-8 space-y-6">
 
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{viewProperty.type}</h2>
              <p className="text-gray-500 text-sm mt-1">Posted on: <span className="font-medium">{viewProperty.createdAt.toString().substr(0,10)}</span></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 
            <div className="space-y-4">
              <div>
                <h4 className="text-gray-700 font-semibold">Owner:</h4>
                <p className="text-gray-600">{viewProperty.sellerName}</p>
              </div>
              <div>
                <h4 className="text-gray-700 font-semibold">Phone Number:</h4>
                <p className="text-gray-600">+91 {viewProperty.phoneNo.toString().substr(0,4)}XXXXXX</p>
              </div>
              <div>
                <h4 className="text-gray-700 font-semibold">Property Address:</h4>
                <p className="text-gray-600">{viewProperty.location}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-gray-700 font-semibold">Property Area:</h4>
                <p className="text-gray-600">{viewProperty.area}</p>
              </div>
              <div>
                <h4 className="text-gray-700 font-semibold">Property Type:</h4>
                <p className="text-gray-600">Residential - {viewProperty.type}</p>
              </div>
              <div>
                <h4 className="text-gray-700 font-semibold">Price:</h4>
                <p className="text-lg font-semibold text-blue-600">&#8377; {viewProperty.price}</p>
              </div>
            </div>
            </div>


            <div className="pt-4">
        <a href={`tel:${viewProperty.phoneNo}`} className="inline-block w-full sm:w-auto text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300">
          Contact Owner
        </a>
      </div>
          </div>

        </div>
          ) : (
            <div className="grid place-content-center h-96" >
              <PiEmpty className="text-center mx-auto text-7xl text-red-500" />
              <h3 className="text-center text-xl" >Cannot Found Page,<br/>Incorect Id</h3>
            </div>
          )
        )
      } 
      </section>
    </main>
  )
}

export default PropertyViewPage