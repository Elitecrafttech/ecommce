import React from 'react';
import footerLogo from '../../assets/logo.png';
import Banner from '../../assets/banner/bgfooter.jpg';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

const Bannerimg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
    
]
const Footer = () => {
  return (
    <div style={Bannerimg}
     className='text-white mb-20'>
        <div className='container'>
            <div data-aos="zoom-in" className='grid md:grid-cols-3 pb-44 pt-5'>
                <div className='py-8 px-4'>
                    <h1 className=' sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3  flex items-center'>
                        <img src={footerLogo} alt="" />
                        Elitecraft</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore at beatae, laudantium totam suscipit facilis.</p>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className=' sm:text-3xl text-xl  font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((link)=>(
                                        <li  className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}><span>{link.title}</span></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className=' sm:text-3xl text-xl  font-bold sm:text-left text-justify mb-3'> Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((link)=>(
                                        <li  className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}><span>{link.title}</span></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mt-6">
                            <a href="#"><FaInstagram className='text-3xl'/></a>
                            <a href="#"><FaFacebook className='text-3xl'/></a>
                            <a href="#"><FaLinkedin className='text-3xl'/></a>
                        </div>
                        <div className='mt-6'>
                            <div className='flex items-center gap-3'>
                                <FaLocationArrow />
                                <p>Noida2, Uttar Pradesh</p>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <FaMobileAlt />
                                <p>+234 704 171 7579</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer