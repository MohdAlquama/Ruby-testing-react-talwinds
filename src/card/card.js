import React from 'react'

function Card({image , name , title,price }) {
  return (
  <div className=''> 

<div className=' pl-5 pt-8'>
    <img  src={image}/>
    <p className='text-3xl  text-gray-500'>{title}</p>
    <p className='text-2xl'>{price}</p>

</div>



  
    
  </div>
  

      
        
        

    
  )
}

export default Card

// https://soft-sprite-7a3047.netlify.app/assets/image.jpg
// Nike Air Max
// 199.99