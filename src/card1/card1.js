import React from 'react'

function Card1({image,name,heading,title,para } ) {
  return (
    <div  className=''>
        <img className='w-[500px] h-[300px]' src={image}/>
        <h1 className='text-3xl text-white'> {heading}</h1>
        <p className='text-2xl text-gray-400'> {title}</p>
        <p className='text-2xl text-white'> {para}</p>
    </div>
  )
}

export default Card1