
const HomePage = () => {
  return (
      <section className="min-h-[calc(100vh-128px)] max-h-[calc(100vh-64px)] md:h-[calc(100vh-128px)] relative w-full flex flex-col justify-center gap-0 px-4 md:px-8 lg:px-12 text-slate-700 z-0 bg-slate-300 md:px-20 md:pt-[px]">
        <h3 className="text-4xl mb-3 leading-tight md:text-6xl px-2 md:px-4 lg:px-12 font-bold">Find Your<span> Perfect House</span></h3>
        <p className="text-lg mb-4 leading-[22px] md:max-w-md md:text-lg px-2 md:px-4 lg:px-12">It is the future of buying and selling property. You can buy or sell a place. The process is quick and easy you can do it from your phone!</p>
        {//<button className="inline-block text-sm h-10 bg-blue-600 font-bold text-white mx-2 md:mx-6 lg:mx-12 border-none shadow-sm tracking-[2px] uppercase rounded-lg mt-5 hover:bg-indigo-800 active:bg-indigo-900 md:text-lg md:w-42 md:h-12">
        }
          <a href="#services" className="inline-block px-6 py-3 ml-2 md:ml-4 mr-auto bg-blue-600 text-white rounded-md transition duration-300 hover:bg-blue-800">View Now</a>
       {// </button>
        }
      </section>
  )
}

export default HomePage