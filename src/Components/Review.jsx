import ReviewCard from './ReviewCard'

const Review = () => {
  const myReviews = [
    {
      name: 'Adil Saifi',
      review: 'Prime Estate is fully trusted Real Estate corporation among of thousand they provide best experience to client for future connect with them. such a amazing Estate.',
    },
    {
      name: 'Md Sohail',
      review: 'Prime Estate is fully trusted Real Estate corporation among of thousand they provide best experience to client for future connect with them. such a amazing Estate.',
    },
    {
      name: 'Wasim Ahmed',
      review: 'Prime Estate is fully trusted Real Estate corporation among of thousand they provide best experience to client for future connect with them. such a amazing Estate.',
    },
    {
      name: 'Sahil',
      review: 'Prime Estate is fully trusted Real Estate corporation among of thousand they provide best experience to client for future connect with them. such a amazing Estate.',
    },
    {
      name: 'Sonu',
      review: 'Prime Estate is fully trusted Real Estate corporation among of thousand they provide best experience to client for future connect with them. such a amazing Estate.',
    },
  ]
  
  return(
    <section id="review" className="relative pt-12 pb-8 md:py-10 bg-slate-100 overflow-hidden px-2">
      <h3 className="text-3xl md:text-4xl sm:text-3xl font-bold text-center mb-6 text-slate-700">Happy Clients</h3>
      <div id="review_wrapper" className="flex w-84 pb-8 overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-4 md:space-x-6 px-4 sm:px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        {
          myReviews.map((card, index) =>(
            <ReviewCard name={card.name} review={card.review} key={index}/>
          ))
        }
      </div>
    </section>
  )
  /*
    <div className="w-72 sm:min-w-[60%] md:min-w-[35%] snap-center flex-shrink-0 bg-gradient-to-r from-purple-200/40 via-indigo-200/40 to-purple-200/40 p-6 rounded-xl shadow-md text-center">
      <q className="text-sm italic text-black/60 w-56">Prime Estate is fully trusted Real Estate corporation among of thousand they provide best experience to client for future connect with them. such a amazing Estate.</q>
      <p className="text-md font-semibold text-slate-700 text-right pt-2"><span className="text-sm font-normal">by,</span> Adil Saifi</p>
    </div>
    <div className="w-72 sm:min-w-[60%] md:min-w-[35%] snap-center flex-shrink-0 bg-gradient-to-r from-purple-200/40 via-indigo-200/40 to-purple-200/40 p-6 rounded-xl shadow-md text-center">
      <img src="./images/sohail.jpg" alt="User" className="w-[70px] h-[70px] rounded-full mx-auto border-2 border-purple-400 shadow-md contrast-125 brightness-110 object-cover mb-4" />
      <h3 className="text-lg font-semibold text-black/90 font-mulish">Md Sohail</h3>
      <q className="text-sm italic text-black/60">Prime Estate is fully trusted Real Estate corporation among of thousand they provide best experience to client for future connect with them. such a amazing Estate.</q>
    </div>
      // <img src="./images/user2.jpg" alt="User" className="w-[70px] h-[70px] rounded-full mx-auto border-2 border-purple-400 shadow-md contrast-125 brightness-110 object-cover mb-4" />
  */
}

export default Review