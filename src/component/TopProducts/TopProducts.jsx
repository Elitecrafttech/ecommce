import React from 'react';
import img1 from '../../assets/cloth/shirt1.jpg';
import img2 from '../../assets/cloth/shirt2.jpg';
import img3 from '../../assets/cloth/shirt3.jpg';
import { FaStar } from "react-icons/fa";

const productsData = [
  {
    id: 1,
    img: img1,
    tittle: "Casual Wear",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, error. Nam ad soluta id nesciunt aspernatur facilis numquam dignissimos, deserunt totam ut fugiat placeat nihil obcaecati, unde quibusdam facere",
  },
  {
    id: 2,
    img: img2,
    tittle: "Printed Shirt",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, error. Nam ad soluta id nesciunt aspernatur facilis numquam dignissimos, deserunt totam ut fugiat placeat nihil obcaecati, unde quibusdam facere",
  },
  {
    id: 3,
    img: img3,
    tittle: "Women Shirt",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, error. Nam ad soluta id nesciunt aspernatur facilis numquam dignissimos, deserunt totam ut fugiat placeat nihil obcaecati, unde quibusdam facere",
  },
]

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className='container'>
        <div className='text-left mb-24'>
          <p data-aos="fade-up" className='text-sm text-primary'>Top Rated Products for you</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero voluptate consequuntur ad?</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
          {productsData.map((data)=>(
              <div 
              data-aos="zoom-in"
              className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-[#8d8d1e] hover:text-white text-white relative shadow-xl duration-300 group max-w-[400px]'>
                <div className=''>
                  <img src={data.img} alt="" className='max-w-[150px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md rounded-lg'/>
                </div>
                <div className='p-4 text-center'>
                  <div className='w-full flex items-center justify-center gap-1'>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                  </div>
                  <h1 className='text-xl font-bold'>{data.tittle}</h1>
                  <p className='text-gray-500 dark:text-gray-200 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                  <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary' 
                  onClick={handleOrderPopup}
                  >Oder Now</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default TopProducts