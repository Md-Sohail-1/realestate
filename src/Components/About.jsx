import realEstateImage from '../images/real-estate-img.jpg'

const About = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-10 lg:px-18 bg-slate-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 flex-wrap">
    
        <div id='about-text' className="flex-2 max-w-[400px]">
          <h2 className="text-3xl text-center sm:text-4xl font-bold text-slate-700 mb-4">About Us</h2>
          <p className="text-lg sm:text-lg text-gray-700 mb-4 leading-relaxed">
            We are a leading real estate company committed to helping you find your dream home. With years of experience and a passion for quality, we provide exceptional services tailored to your needs.
          </p>
          <p className="text-lg sm:text-lg text-gray-700 mb-6 leading-relaxed">
            Our team specializes in buying, selling, and renting properties with transparency and professionalism.
          </p>
          <a href="#contact_us" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md transition duration-300 hover:bg-blue-800">
            Get in Touch
          </a>
        </div>

        <div id='about-image' className="flex-2 px-0 md:py-6 text-center">
          <img loading="lazy" src={realEstateImage} alt="Real Estate" className="w-full max-w-md rounded-xl shadow-md"/>
        </div>

      </div>
    </section>
  )
}

export default About