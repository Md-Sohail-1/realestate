import React from 'react'

const ReviewCard = ({name, review}) => {
  return (
    <div className="w-72 sm:min-w-[60%] md:min-w-[35%] snap-center flex-shrink-0 bg-gradient-to-r from-slate-300/40 via-indigo-500/15 to-indigo-700/15 p-6 rounded-xl shadow-md text-center">
      <q className="text-sm italic text-black/60 w-56">{review}</q>
      <p className="text-md font-semibold text-slate-700 text-right pt-2"><span className="text-sm font-normal">by, </span>{name}</p>
    </div>
  )
}

export default ReviewCard