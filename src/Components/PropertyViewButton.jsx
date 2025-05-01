import React from 'react'

//import BASE_URL from '../../Service/helper.js'

const PropertyViewButton = ({link}) => {
  return (
    <a href={link} className="inline-block px-6 py-2 mr-auto bg-blue-600 text-white rounded-md transition duration-300 hover:bg-blue-800">
      Check Now
    </a>
  )
}

export default PropertyViewButton