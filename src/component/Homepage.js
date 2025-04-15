import React from 'react'
import Header from '../Nav/Header'
import Card from '../card/card'
import Card1 from '../card1/card1'
import Card2 from './card2/card2'
import Card3 from './card3/card3'

function Homepage() {
  return (
    <>
        
        <Header/>


        <div className=' bg-fixed w-[1000px] h-[800px] flex justify-center ml-80'>


        <img   className=' ' src='https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80' />
        </div>
        
        <div className='container '>
       
       {/* <div className='grid grid-cols-3 '>
       <Card image={"https://soft-sprite-7a3047.netlify.app/assets/image.jpg"} price={"199.99"}  title={"Nike Air Max"}/>
        <Card image={"https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2"} price={"17.999"}  title={"Adidas Ultraboost"}/>
        <Card image={"https://images.unsplash.com/photo-1608231387042-66d1773070a5"} price={"15.999"}  title={"Jordan Retro"}/>


       </div> */}
       <div className='text-center pt-8'>
        <h1 className='text-3xl font-bold'>Featured Collection</h1>
        <p className='text-2xl pt-2'>Curated selections that blend cutting-edge technology with timeless style</p>
       </div>

       <div className='grid grid-cols-3 pt-16'>
       <Card1 image={"https://soft-sprite-7a3047.netlify.app/assets/image.jpg"}  heading={"Men's Collection"} title={"Bold designs for the modern man"} para={"Shop Now"}/>
       <Card1 image={"https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2"} hrading={"Women's Collection"} title={"Elegant Style that empower"} para={"Shop Now"}/>
       <Card1 image={"https://images.unsplash.com/photo-1608231387042-66d1773070a5"} heading={"Sport Collection"} title={"Performance meets innovation"} para={"Shop Now"}/>

         </div>
         <div className='text-center gap-5'>
	

          <h1 className='text-3xl font-bold '>Latest Arrivals</h1>  
          <p className='text-2xl pt-2'> Fresh styles that define the season</p>
         </div>

         <div className='grid grid-cols-3 pt-5'>
        
          
          <Card2 image={"https://soft-sprite-7a3047.netlify.app/assets/image.jpg"}/>
          <Card2 image={"https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2"}/>
          <Card2 image={"https://images.unsplash.com/photo-1608231387042-66d1773070a5"}/>
         </div>

         <div className=' text-center pt-5'>
          <h1 className='text-3xl font-bold'>Women's Collection</h1>
          <p className='pt-3 text-2xl'> Styles that celebrate femininity and strength</p>
              
         </div>

         <div className='grid grid-cols-3 gap-10 pt-5' >
           <Card3 image={"https://soft-sprite-7a3047.netlify.app/assets/nike-just-do-it.png"}/>
           <Card3 image={"https://soft-sprite-7a3047.netlify.app/assets/nike-just-do-it.jpg"}/>
           <Card3 image={"https://soft-sprite-7a3047.netlify.app/assets/nike-just-do-its.jpg"}/>
         </div>
       
        </div>
        
        
        </>
  )
}

export default Homepage