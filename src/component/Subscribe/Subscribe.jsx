import React from 'react'
import Banner from '../../assets/banner/bg.jpg'

const BannerImage = {
    backgroundImage: `url(${Banner})`,
    backgoundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

const Subscribe = () => {
  return (
    <div 
    data-aos="zoom-in" 
    className='mb-20 bg-gray-100 dark:bg-gray-800 text-black' style={BannerImage}>
        <div className='container backdrop-blur-sm py-10'>
            <div className='space-y-6 max-w-xl mx-auto'>
                <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold'>Get Notified About New products</h1>
                <input data-aos="fade-up" type="text" placeholder='Enter your email' className='w-full p-3 bg-[#dabdbd] dark:bg-gray-600 placeholder:text-white placeholder:text-2xl text-white text-2xl rounded-lg'/>
            </div>
        </div>
    </div>
  )
}

export default Subscribe