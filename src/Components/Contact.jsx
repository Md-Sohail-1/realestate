import { useState } from 'react';

import contactImage from '../images/contact.jpg'

import { userContactMessage } from '../../Service/apis'

const Contact = () => {
  // Form input state
  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  // form submit status state, true when user submut form or false
  const [formSubmited, setFormSubmited] = useState("")
  // form Confirmation message state, set message based on response
  const [formConfirmMsg, setFormConfirmMsg] = useState("demo")
  
  // Set inout value to state
  const setInputValue = (e) =>{
    const { name, value } = e.target;
    setInputData({...inputData, [name]: value})
  }
  
  // form submission 
  const formSubmit = async (e) =>{
    e.preventDefault();
    const {name, email, message} = inputData;
    
    // Create a from for sending contact details into server
    let data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('message', message);
    
    let header = { 
      'Content-Type': 'application/json' 
    }
    
    // Send resquest to server
    const response = await userContactMessage(data, header);
    
    // Check there is server error or not
    if(!response.message){
      // Check status not more than 300
      if(response.status < 300){
        setInputData({
          ...inputData,name:'', email:'', message:''
        })
        setFormConfirmMsg('Thanks! Your message has been sent.');
        setFormSubmited(true);
        setTimeout(()=>{
        setFormSubmited("")
      },4000)
        return 
      }
      
      // if no server error and response status more than 300
      setFormConfirmMsg('Sorry, Your message has been not sent!');
      setFormSubmited(false);
      setTimeout(()=>{
        setFormSubmited("")
      },4000)
      return
    }
    //  Run if have server error or server down 
    setFormConfirmMsg('Sorry, Server was Down, try later!');
    setFormSubmited(false);
    setTimeout(()=>{
      setFormSubmited("")
    },4000)
  }
  
  return (
    <section id="contact_us" className="w-full py-16 px-6 sm:px-12 md:px-10 bg-slate-200 flex justify-center items-center flex-col md:flex-row md:gap-6">
      <div className="flex-1 md:max-w-[400px] lg:min-w-[300px] pb-4 pt-0 md:py-4 px-0 text-center flex justify-center">
        <img loading="lazy" src={contactImage} alt="Conatct Us" className="w-full max-w-md mx-auto rounded-xl mix-blend-multiply" height="100%" width="100%" />
      </div>
      <form  onSubmit={formSubmit} className="flex-1 w-full max-w-3xl grid gap-2 px-0 md:px-4 relative bg-transparent">
      {
        // Confirmation Message 
      }
      <div id="confirmation" className={`${formSubmited === '' && 'hidden'} ${formSubmited ? 'text-green-600' : 'text-red-600'} font-medium mb-6`}>{formConfirmMsg}</div>
        <h3 className="text-3xl sm:text-3xl md:text-4xl text-center font-bold text-slate-700 pb-4 md:mb-1">Connect With Us</h3>
        <div className="absolute inset-0 z-[-1] blur-[100px] rounded-xl bg-[radial-gradient(circle_at_center,_rgba(255,120,110,0.4),_rgba(110,120,255,0.4))]"></div>
        <input name='name' onChange={setInputValue} value={inputData.name} type="text" placeholder="Enter Name" required className="w-full p-3 rounded-md bg-slate-100 text-base shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" autocomplete="true"/>
        <input name='email' onChange={setInputValue} value={inputData.email} type="email" placeholder="Enter Email ID" required className="w-full p-3 rounded-md bg-slate-100 text-base shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" autocomplete="true"/>
        <textarea name='message' onChange={setInputValue} value={inputData.message} placeholder="Message Here..." required className="w-full h-32 p-3 rounded-md bg-slate-100 text-base shadow border border-transparent resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"></textarea>
        <button type="submit" className="mr-auto my-2" >
          <a className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md transition duration-300 hover:bg-blue-800 ml-0 mr-auto">
            Get Connected
          </a>
        </button>
      </form>
    </section>
  )
}

export default Contact