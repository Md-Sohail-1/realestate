import { NavLink } from 'react-router'

const ServiceCard = ({heading, desc, link, btnValue, imageUrl}) => {
  return (
    <>
    <div className="md:max-h-96 mx-auto md:mx-8 md:min-h-96 p-6 px-6 flex flex-col justify-center items-center text-center gap-2 transition-all duration-100 rounded-xl opacity-100 scale-100 shadow-[0_0_2px_rgba(1,1,1,0.2)] bg-slate-200 hover:bg-slate-200 max-w-sm w-full">
      <img loading="lazy" src={imageUrl} alt={heading+" image"} className="w-24 h-24 rounded-full mx-auto shadow-sm brightness-110 object-cover" />
      <h3 className="text-2xl sm:text-xl text-slate-800 pt-2 font-semibold">{heading}</h3>
      <p className="text-base sm:text-base">{desc}</p>
      <NavLink to={link} className="inline-block px-6 py-2 mt-4 border-2 border-blue-600 text-blue-600 rounded-md transition duration-300 hover:shadow-md">{btnValue}</NavLink>
    </div>
    </>
  )
}

export default ServiceCard