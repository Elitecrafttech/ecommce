import React from 'react';
import img1 from '../../assets/testimonia/t1.jpg';
import img2 from '../../assets/testimonia/t2.jpg';
import img3 from '../../assets/testimonia/t3.jpg';
import img4 from '../../assets/testimonia/t4.jpg';
import Slider from 'react-slick';

const TestimonialData = [
    {
        id: 1,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, error. Nam ad soluta id nesciunt aspernatur facilis numquam dignissimos, deserunt totam ut fugiat placeat nihil obcaecati, unde quibusdam facere",
        img: img1,
    },
    {
        id: 2,
        name: "Satya Nadella",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, error. Nam ad soluta id nesciunt aspernatur facilis numquam dignissimos, deserunt totam ut fugiat placeat nihil obcaecati, unde quibusdam facere",
        img: img2,
    },
    {
        id: 3,
        name: "Virat Kohli",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, error. Nam ad soluta id nesciunt aspernatur facilis numquam dignissimos, deserunt totam ut fugiat placeat nihil obcaecati, unde quibusdam facere",
        img: img3,
    },
    {
        id: 4,
        name: "Sachin Tendulkar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, error. Nam ad soluta id nesciunt aspernatur facilis numquam dignissimos, deserunt totam ut fugiat placeat nihil obcaecati, unde quibusdam facere",
        img: img4,
    },
]

const Testimonials = () => {

    var settings ={
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        // slidesToscroll: 2,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
  return (
    <div className='py-10 mb-10'>
        <div className='container'>
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-sm text-primary'>- What our customers are saying -</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonial</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero voluptate consequuntur ad?</p>
            </div>
            <div data-aos="zoom-in">
                <Slider {...settings}>{
                    TestimonialData.map((data)=>(
                        <div className='my-6'>
                        <div key={data.id} className='flex flex-col gap-4 shadow-lg py-8 px-[50px] mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'>
                            <div className='mb-4'>
                                <img src={data.img} alt="" className='rounded-full w-[130px] h-[130px]'/>
                            </div>
                            <div className='flex flex-col items-center gap-4'>
                                <div className='space-y-3'>
                                <p className='text-xs text-gray-500 dark:text-gray-300'>{data.text}</p>
                                <h1 className='text-xl font-bold text-black/80 dark:text-white'>{data.name}</h1>
                                </div>
                            </div>
                            <p className='text-black/20 text-9xl font-serif absolute top-0 right-0 dark:text-primary'>,,</p>
                        </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonials