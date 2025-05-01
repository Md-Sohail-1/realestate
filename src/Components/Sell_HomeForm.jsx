import React, { useState } from 'react'
import { userSellPropertyHandle } from '../../Service/apis.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sell_HomeForm = () => {
  const [inputData, setInputData] = useState({
    sellerName: "",
    location: "",
    sellerAddress: "",
    price: "",
    area: "",
    phoneNo: "",
  });
  const [propertyType, setPropertyType] = useState("");
  const [image, setImage] = useState('');
 
  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({...inputData, [name]: value})
  }
  
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  
  const setTypeValue = (e) => {
    setPropertyType(e.target.value)
  }
  
  const submitSellHomeForm = async (e) =>{
    e.preventDefault();
    const { sellerName, location, sellerAddress, phoneNo, area, price } = inputData;
    let data = new FormData();
    data.append("sellerName", sellerName);
    data.append("location", location);
    data.append("sellerAddress", sellerAddress);
    data.append("phoneNo", phoneNo);
    data.append("area", area);
    data.append("price", price);
    data.append("type", propertyType);
    data.append("propertyImg", image);
    
    const header = {
      'content-type': 'multipart/form-data',
    };
    
    const response = await userSellPropertyHandle(data, header);
    
    if(!response.message){
      if(response.status < 300){
        setInputData({
          ...inputData, sellerName: "", sellerAddress: "",
          location: "", price: "", area: "", phoneNo: "",
        });
        setPropertyType('');
        setImage('')
        toast.success(response.data.msg)
        return;
      }
      toast.error(response.data.msg)
      return
    }
    toast.error('Sorry, Our Server Has Down,\ntry Later')
  }
  
  return (
    <section id="sell_home_wrapper" className="mt-16 bg-slate-200 py-12">
      <ToastContainer />
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Sell A Property</h3>

      <form onSubmit={submitSellHomeForm} className="max-w-3xl mx-auto bg-slate-200 rounded-xl p-6 space-y-5">
    
        <div>
          <label for="seller_name" className="block mb-1 font-medium text-gray-700">Enter Your Name:<span className="text-red-500 text-lg font-bold p-1">*</span></label>
          <input type="text" id="seller_name" name="sellerName" onChange={setInputValue} value={inputData.sellerName} placeholder="Eg: john doe"  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500" />
        </div>

        <div>
          <label for="seller_phone_no" className="block mb-1 font-medium text-gray-700">Enter Your Phone No.:<span className="text-red-500 text-lg font-bold p-1">*</span></label>
          <input type="number" id="seller_phone-no" name="phoneNo" onChange={setInputValue} value={inputData.phoneNo} placeholder="Eg: 9876543210"  min="1111111111" max="9999999999" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500" />
        </div>

        <div>
          <label for="seller_address" className="block mb-1 font-medium text-gray-700">Enter Your Address:<span className="text-red-500 text-lg font-bold p-1">*</span></label>
          <textarea id="seller_address" name="sellerAddress" onChange={setInputValue} value={inputData.sellerAddress} placeholder="Current Living Address..."  rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-indigo-500"></textarea>
        </div>
       

        <div>
          <label for="seller_property_location" className="block mb-1 font-medium text-gray-700">Enter Property Location:<span className="text-red-500 text-lg font-bold p-1">*</span></label>
          <input type="text" id="seller_property_location" name="location" onChange={setInputValue} value={inputData.location} placeholder="Property Address..."  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500" />
        </div>

        <div>
          <label for="seller_property_area" className="block mb-1 font-medium text-gray-700">Enter Area Of Property (in Sqft):<span className="text-red-500 text-lg font-bold p-1">*</span></label>
          <input type="number" id="seller_property_area" name="area" onChange={setInputValue} value={inputData.area} placeholder="Eg: 450(only Digits)"  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500" />
        </div>

        <div>
          <label for="seller_property_type" className="block mb-1 font-medium text-gray-700">Select Property Type:<span className="text-red-500 text-lg font-bold p-1">*</span></label>
          <select id="seller_property_type" name="type" value={propertyType} onChange={setTypeValue}  className="w-full px-3 py-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500">
            <option>Select type</option>
            <option value="Land">Land</option>
            <option value="Flat">Flat</option>
            <option value="1 In Build">1 Floor Residential House</option>
            <option value="2 In Build">2 Floor Residential House</option>
            <option value="3 In Build">3 Floor Residential House</option>
          </select>
        </div>

        <div>
          <label for="seller_property_price" className="block mb-1 font-medium text-gray-700">Enter Price Expectation (in Lakhs ₹):<span className="text-red-500 text-lg font-bold p-1">*</span></label>
          <input type="text" id="seller_property_price" name="price"  onChange={setInputValue} value={inputData.price} placeholder="Eg: 40.5 (40 Lakhs 50 Thousand)" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500" />
        </div>

        <div>
          <label for="seller_property_image" className="block mb-1 font-medium text-gray-700">Upload A Property Image:</label>
          <input type="file" id="seller_property_image" accept="image/jpg image/png image/jpeg" onChange={handleImageChange} name="propertyImg" className="w-full px-3 py-2 border border-gray-400 rounded-md bg-white text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-100 file:text-indigo-700 hover:file:bg-indigo-200" />
        </div>

        <div>
          <button type="submit" className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-all">Submit Form</button>
        </div>
      </form>
    </section>
  )
}

export default Sell_HomeForm