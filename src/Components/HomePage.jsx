
const HomePage = () => {
  return (
      <section className="min-h-[calc(100vh-64px)] max-h-[calc(100vh-64px)] relative w-full flex flex-col justify-center gap-0 px-4 md:px-8 lg:px-12 text-slate-700 z-0 bg-slate-300 md:px-20 md:pt-[px]">
        <h3 className="text-4xl mb-3 leading-tight md:text-6xl px-2 md:px-4 lg:px-12 font-bold">Find Your<span> Perfect House</span></h3>
        <p className="text-lg mb-4 leading-[22px] md:max-w-md md:text-lg px-2 md:px-4 lg:px-12">It is the future of buying and selling property. You can buy or sell a place. The process is quick and easy you can do it from your phone!</p>
        <div className="px-2 md:px-4 lg:px-12">
          <a href="#services" className="inline-block mr-auto px-6 py-3 bg-blue-600 text-white rounded-md transition duration-300 hover:bg-blue-800">View Now</a>
        </div>
      
      </section>
  )
}

export default HomePage