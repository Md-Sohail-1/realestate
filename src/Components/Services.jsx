import ServiceCard from './ServiceCard'

import buyHomeSvg from '../images/buy_home2.jpg'
import sellHomeSvg from '../images/sell_home.jpg'
import rentHomeSvg from '../images/rent_home.jpg'

const Services = () => {
  let ourServices = [
    {
      heading: 'Buy A Property',
      desc: 'A real estate agent can provide you with a clear breakdown of costs so that you can avoid surprises expenses.',
      link: '/buy-home',
      btnValue: 'Find a Home',
      imageUrl: buyHomeSvg,
    },
    {
      heading: 'Sell a Property',
      desc: 'No matter what path you take to sell you home, we can help you navigate a successful sale.',
      link: '/sell-home',
      btnValue: 'Sell a Home',
      imageUrl: sellHomeSvg
    },
    /*{
      heading: 'Rent Property',
      desc: 'We\'re creating a seamless online experience - from shopping on the largest rental network, to applying, to paying rent.',
      link: '/rent-home',
      btnValue: 'Find a Rental',
      imageUrl: rentHomeSvg
    },*/
  ];
  
  return (
    <section id="services" class="w-full bg-slate-100 px-4 sm:px-6 md:px-8 lg:px-12 pt-28 pb-16 md:pb-20 relative">
      <h3 class="absolute font-bold top-12 left-1/2 -translate-x-1/2 w-[300px] max-w-content text-3xl sm:text-3xl md:text-4xl md:w-[500px] text-center text-slate-700 z-20">Services We Offer</h3>  
      <div class="flex mx-auto max-w-6xl flex-wrap px-2 gap-4 md:gap-6 justify-between items-center">
        {
          ourServices.map((card, index) => (
            <ServiceCard heading={card.heading} desc={card.desc} link={card.link} btnValue={card.btnValue} imageUrl={card.imageUrl} key={index}/>
          ))
        }
      </div>
    </section>
  )
}

export default Services