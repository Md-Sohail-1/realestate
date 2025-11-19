import React from 'react'

import { BASE_URL } from '../../Service/helper.js'
import PropertyViewButton from './PropertyViewButton.jsx'
import { noImage } from '../../Service/noImage';

const PropertyCard = ({location, price, img, dataType, dataArea, area, type, id}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl" data-area={dataArea} data-type={dataType}>
      <img loading="lazy" src={img == 'none' ? noImage : `${BASE_URL}/${img}`} alt="Image Not Available" className="w-full max-h-52 min-h-12 object-cover shadow-sm" />
      <div className="p-5 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{location}</h3>
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="text-xs font-medium bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">{area}</span>
          <span className="text-xs font-medium bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">{type}</span>
        </div>
        <h4 className="text-red-500 font-semibold text-lg mt-3">&#8377; {price}</h4>
        <PropertyViewButton link={`/property/view/${id}`} key={id}/>
      </div>
    </div>
  )
}

export default PropertyCard