import React from 'react'
import logo from '../../assets/logo.png'
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from './DarkMode';

const Menu = [
    {id: 1,
     name: "Home",
     link: "/#",   
    },
    {id: 2,
     name: "Top Rated",
     link: "/#",   
    },
    {id: 3,
     name: "Kids Wear",
     link: "/#",   
    },
    {id: 4,
     name: "Mens Wear",
     link: "/#",   
    },
    {id: 5,
     name: "Electronics",
     link: "/#",   
    },

];

const DropdownLinks = [
    {
        name: "Trending Products",
        link: "/#",
    },
    {
        name: "Best Selling",
        link: "/#",
    },
    {
        name: "Top Rated",
        link: "/#",
    },
]
const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        
        <div className='bg-primary/40 py-2'>
            <div className='container flex justify-between items-center'>
                <div>
                    <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                        <img src={logo} alt="" className='w-10'/> Elitecraft
                    </a>
                </div>
                <div className='flex justify-between items-center gap-4'>
                    <div >
                        <div className='relative group '>
                            <input type="text" name="" id="" placeholder='search' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-[1] focus:border-primary dark:border-gray-500 dark:bg-gray-800'/>
                            <IoMdSearch  className='text-gray-500 group-hover:text-primary absolute top-[2px] translate-y-1/2 right-3'/>
                        </div>
                    </div>
                    <button onClick={() => handleOrderPopup()} className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                        <span className='group-hover:block hidden transition-all duration-200'>Order Now</span>
                        <FaShoppingCart className='text-xl text-white drop-shadow-sm cursor-pointer'/>
                    </button>
                    <div>
                    <DarkMode />
                    </div>
                </div>
            </div>
        </div>
        <div data-aos="zoom-in" className='flex justify-center'>
            <ul className='flex items-center gap-4'>
                {
                    Menu.map((data)=>(
                        <li key={data.id}> <a href={data.link} className='inline-block px-4 hover:text-primary duration-200'>{data.name}</a> </li>
                    ))
                }
                <li className='group relative cursor-pointer'>
                    <a href="#" className='flex items-center gap-[2px] py-2'>Trending Products <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/></a>
                    <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md'>
                        <ul>
                            {DropdownLinks.map((data) => (
                                <li>
                                    <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-primary/20 '>
                                        {data.name}
                                    </a>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar