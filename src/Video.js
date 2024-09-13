import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ImageCarousel = () => {
    const slides = [
        { name: 'Sanjay Jinwal', company: 'Ashim Consultancy Pvt Ltd', img: 'https://www.egniol.co.in/_next/image?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2FWohy87rzEUg%2Fmaxresdefault.jpg&w=1920&q=75' },
        { name: 'Rahul Mehta', company: 'Nowrosjee Wadia College', img: 'https://www.egniol.co.in/_next/image?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2FiojiGPyjQGY%2Fmaxresdefault.jpg&w=3840&q=75' },
        { name: 'Devidas Irindole', company: 'Aquarian Engineering Private Limited', img: 'https://www.egniol.co.in/_next/image?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2FBQ72ylHY3r4%2Fmaxresdefault.jpg&w=3840&q=75' },
        { name: 'Sanjay Jinwal', company: 'Ashim Consultancy Pvt Ltd', img: 'https://www.egniol.co.in/_next/image?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2FWohy87rzEUg%2Fmaxresdefault.jpg&w=1920&q=75' },
        { name: 'Rahul Mehta', company: 'Nowrosjee Wadia College', img: 'https://www.egniol.co.in/_next/image?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2FiojiGPyjQGY%2Fmaxresdefault.jpg&w=3840&q=75' },
        { name: 'Devidas Irindole', company: 'Aquarian Engineering Private Limited', img: 'https://www.egniol.co.in/_next/image?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2FBQ72ylHY3r4%2Fmaxresdefault.jpg&w=3840&q=75' },


    ];

    return (
        <div className="container mx-auto px-4 py-8 relative">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}

                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper-container"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="swiper-slide px-4">
                        <div className="relative w-full aspect-[3/4] bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="absolute inset-0 bg-gray-200">
                                <img src={slide.img} className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-800">{slide.name}</h3>
                                        <p className="text-xs text-gray-600">{slide.company}</p>
                                    </div>
                                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default ImageCarousel;