import React from 'react'

function Menpage() {
  return (
 <>
 
 <div className='pb-20'>
        <img className='w-[1300px] h-[400px] ' src='https://m.media-amazon.com/images/I/717kNtd-jxL._AC_UY1000_.jpg' />
        <button className='text-2xl rounded-xl bg-gray-300 mt-5'>Category </button>
        <button className='text-2xl rounded-xl bg-gray-300 ml-8 mt-5 ' >Price</button>
        <button className='text-2xl rounded-xl bg-gray-300 ml-8 mt-'>Size</button>
    </div>

     <div className='grid grid-cols-3'> 
    <div>
        <img className='w-[400px] h-[400px] pt-8' src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png'/>
        <h1 className='font-bold text-2xl'>Nike Air Jordan 1 Retro </h1>
        <p className='text-2xl text-gray-500'>Basketball</p>
        <p className='text-2xl'>$249.99</p>
        
    </div>
    <div className=''>
        <img className='w-[400px] h-[400px] pt-8' src='https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b6b61c3f-3b2e-4815-b55c-3264b0f6f437/WMNS+AIR+FORCE+1+%2707+LX.png'/>
        <h1 className='font-bold text-2xl'>Nike Air Max 270</h1>
        <p className='text-2xl text-gray-500'> Running</p>
        <p className='text-2xl'>$179.99</p>
    </div>
    
    <div>
        <img  className ='w-[400px] h-[400px] bg-gray-200' src='https://cdn-images.farfetch-contents.com/24/55/76/33/24557633_55482211_1000.jpg'/>
        
        <h1 className='font-bold text-2xl'>Nike Blazer Mid '77</h1>
        <p className='text-2xl text-gray-500'>Lifestyle</p>
        <p className='text-2xl text-gray-500'>$129.99</p>
    </div>
    </div>
    
 
 </>


  )
}

export default Menpage