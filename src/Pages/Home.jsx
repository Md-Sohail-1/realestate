import HomePage from '../Components/HomePage'
import Services from '../Components/Services'
import About from '../Components/About'
import Review from '../Components/Review'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <main id="main" className="h-[calc(100vh-128px)] top-16 overflow-x-hidden relative w-full mt-0 bg-cover bg-center">
      <HomePage />
      <Services />
      <About />
      <Review />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home