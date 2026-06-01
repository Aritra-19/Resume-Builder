import React from 'react'

const Title = ({title, description}) => {
  return (
    <div className='flex flex-col items-center justify-center text-center mb-12 md:mb-16'>
      <h2 className='text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-700 to-indigo-600 bg-clip-text text-transparent'>{title}</h2>
      <p className='max-w-2xl mt-6 text-slate-600 text-base sm:text-lg leading-relaxed'>{description}</p>
    </div>
  )
}

export default Title
