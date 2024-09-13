import React, { useRef, useEffect, useState } from 'react';
import { IoCallOutline } from "react-icons/io5";
import { FaClock, FaGoogle, FaRocket, FaUsers, FaRupeeSign } from "react-icons/fa";
import Video from './Video';
import { FaUserCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { AiOutlineBank } from "react-icons/ai";
import { TbMoneybag } from "react-icons/tb";
import { BsBuildings } from "react-icons/bs";
import { RiPlantLine } from "react-icons/ri";
import { MdPhonelinkSetup } from "react-icons/md";
import Form from './Form';
import Footer from './Footer';
import ImageCarousel from './Video';
const App = () => {
  const [hoveredPartner, setHoveredPartner] = useState('')
  const stats = [
    { icon: <FaClock />, number: "6+ YEARS", label: "OF JOURNEY" },
    { icon: <FaGoogle />, number: "7500+", label: "GOOGLE REVIEWS" },
    { icon: <FaRocket />, number: "53 CR+", label: "SEED FUNDS", subtext: "SECURED BY 320+ BUSINESSES" },
    { icon: <FaRocket />, number: "21,223+", label: "STARTUPS", subtext: "RECOGNIZED BY GOVERNMENT IN FY 23-24" },
    { icon: <FaRupeeSign />, number: "103 CR+", label: "FUNDS GRANTED TO", subtext: "AGRICULTURE AND ANIMAL HUSBANDRY" },
    { icon: <FaUsers />, number: "50,000+", label: "CLIENTS FROM VARIOUS", subtext: "INDUSTRIES" },
    { icon: <FaClock />, number: "6+ YEARS", label: "OF JOURNEY" },
    { icon: <FaGoogle />, number: "7500+", label: "GOOGLE REVIEWS" },
    { icon: <FaRocket />, number: "53 CR+", label: "SEED FUNDS", subtext: "SECURED BY 320+ BUSINESSES" },
    { icon: <FaRocket />, number: "21,223+", label: "STARTUPS", subtext: "RECOGNIZED BY GOVERNMENT IN FY 23-24" },
    { icon: <FaRupeeSign />, number: "103 CR+", label: "FUNDS GRANTED TO", subtext: "AGRICULTURE AND ANIMAL HUSBANDRY" },
    { icon: <FaUsers />, number: "50,000+", label: "CLIENTS FROM VARIOUS", subtext: "INDUSTRIES" },

  ];
  const testimonals = [
    { icon: <FaClock />, number: "6+ YEARS", label: "OF JOURNEY", profile: <FaUserCircle />, text1: 'Availed', text2: '10 LAKH', text3: '59 days', text4: 'STARTUP INDIA SEED FUND SCHEME' },
    { icon: <FaGoogle />, number: "7500+", label: "GOOGLE REVIEWS", profile: <FaUserCircle />, text1: 'Availed', text2: '50 LAKH', text3: '79 days', text4: 'STARTUP INDIA SEED FUND SCHEME' },
    { icon: <FaRocket />, number: "53 CR+", label: "SEED FUNDS", subtext: "SECURED BY 320+ BUSINESSES", profile: <FaUserCircle />, text1: 'Availed', text2: '10 LAKH', text3: '59 days', text4: 'STARTUP INDIA SEED FUND SCHEME' },
    { icon: <FaRocket />, number: "21,223+", label: "STARTUPS", subtext: "RECOGNIZED BY GOVERNMENT IN FY 23-24", profile: <FaUserCircle />, text1: 'Availed', text2: '10 LAKH', text3: '59 days', text4: 'STARTUP INDIA SEED FUND SCHEME' },
    { icon: <FaRupeeSign />, number: "103 CR+", label: "FUNDS GRANTED TO", subtext: "AGRICULTURE AND ANIMAL HUSBANDRY", profile: <FaUserCircle />, text1: 'Availed', text2: '10 LAKH', text3: '59 days', text4: 'STARTUP INDIA SEED FUND SCHEME' },
    { icon: <FaUsers />, number: "50,000+", label: "CLIENTS FROM VARIOUS", subtext: "INDUSTRIES", profile: <FaUserCircle />, text1: 'Availed', text2: '10 LAKH', text3: '59 days', text4: 'STARTUP INDIA SEED FUND SCHEME' },
    { icon: <FaClock />, number: "6+ YEARS", label: "OF JOURNEY", profile: <FaUserCircle />, text1: 'Availed', text2: '10 LAKH', text3: '59 days', text4: 'STARTUP INDIA SEED FUND SCHEME' },
    { icon: <FaGoogle />, number: "7500+", label: "GOOGLE REVIEWS", profile: <FaUserCircle />, text1: 'Availed', text2: '10 LAKH', text3: '59 days', text4: 'STARTUP INDIA SEED FUND SCHEME' },
    { icon: <FaRocket />, number: "53 CR+", label: "SEED FUNDS", subtext: "SECURED BY 320+ BUSINESSES", profile: <FaUserCircle />, text1: 'Availed', text2: '10 LAKH', text3: '59 days', text4: 'STARTUP INDIA SEED FUND SCHEME' },
    { icon: <FaRocket />, number: "21,223+", label: "STARTUPS", subtext: "RECOGNIZED BY GOVERNMENT IN FY 23-24", profile: <FaUserCircle />, text1: 'Availed', text2: '10 LAKH', text3: '59 days', text4: 'STARTUP INDIA SEED FUND SCHEME' },
    { icon: <FaRupeeSign />, number: "103 CR+", label: "FUNDS GRANTED TO", subtext: "AGRICULTURE AND ANIMAL HUSBANDRY", profile: <FaUserCircle />, text1: 'Availed', text2: '10 LAKH', text3: '59 days', text4: 'STARTUP INDIA SEED FUND SCHEME' },
    { icon: <FaUsers />, number: "50,000+", label: "CLIENTS FROM VARIOUS", subtext: "INDUSTRIES", profile: <FaUserCircle />, text1: 'Availed', text2: '10 LAKH', text3: '59 days', text4: 'STARTUP INDIA SEED FUND SCHEME' },

  ];

  const expertiseAreas = [
    { icon: 'https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSetup1.180fdce5.gif&w=640&q=75', title: "Business Setup", description: "Company Registrations, Certifications and more..." },
    { icon: 'https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGrowth1.ccec1283.gif&w=640&q=75', title: "Business Growth", description: "Grants, Loans, Fundings and more..." },
    { icon: 'https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FExpansion1.74ab6752.gif&w=640&q=75', title: "Business Expansion", description: "Web Development, Marketing services & more..." },
    { icon: 'https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FProtection1.775f336c.gif&w=640&q=75', title: "Business Protection", description: "Legal & Compliances..." },
  ];
  const Loans = [
    { icon: 'https://www.egniol.co.in/_next/static/media/rupee.4a7af5d2.svg', title: "Seed Support Scheme", description: "₹1 CR" },
    { icon: 'https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fserve_icon2.5fa51cd7.png&w=128&q=75', title: "Grant for Textile", description: "₹4 CR" },
    { icon: 'https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fserve_icon3.366021b4.png&w=128&q=75', title: "MSME Loans", description: "₹5 CR" },
    { icon: 'https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fserve_icon4.9b2e3b5b.png&w=128&q=75', title: "NBFC Loans", description: "₹6 CR" },
    { icon: 'https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fserve_icon5.87b7f2a8.png&w=128&q=75', title: "NAIFF Loans", description: "₹6 CR" },
    { icon: 'https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fserve_icon6.a1794e57.png&w=256&q=75', title: "Funds for SC, ST & OBC Entrepreneurs", description: "₹6 CR" },
  ];

  const PartnerImages = [
    {
      id: 1,
      img: require('./images/img8.png')
    },
    {
      id: 2,
      img: require('./images/img8.png')
    },
    {
      id: 3,
      img: require('./images/img8.png')
    },

  ]
  const headlines = [
    {
      id: 1,
      img: require('./images/img9.png'),
      text1: 'Changing The Game: Egniols MSME Samvaad Leads The Way For Indian MSMEs'
    },
    {
      id: 2,
      img: require('./images/img10.png'),
      text1: 'Changing The Game: Egniols MSME Samvaad Leads The Way For Indian MSMEs'

    },
    {
      id: 3,
      img: require('./images/img11.png'),
      text1: 'Changing The Game: Egniols MSME Samvaad Leads The Way For Indian MSMEs'

    },
    {
      id: 4,
      img: require('./images/img12.png'),
      text1: 'Changing The Game: Egniols MSME Samvaad Leads The Way For Indian MSMEs'

    },

  ]

  const cardsRef = useRef(null);
  const testref = useRef(null);
  const duplicatedStats = [...stats, ...stats];
  const duplicatedtest = [...testimonals, ...testimonals];
  useEffect(() => {
    const scrollCards = () => {
      if (cardsRef.current) {
        cardsRef.current.scrollLeft += 1;
        if (cardsRef.current.scrollLeft >= (cardsRef.current.scrollWidth / 2)) {
          cardsRef.current.scrollLeft = 0;
        }
      }
    };

    const intervalId = setInterval(scrollCards, 10);

    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    const scrollCards = () => {
      if (testref.current) {
        testref.current.scrollLeft += 1;
        if (testref.current.scrollLeft >= (testref.current.scrollWidth / 2)) {
          testref.current.scrollLeft = 0;
        }
      }
    };

    const intervalId = setInterval(scrollCards, 10);

    return () => clearInterval(intervalId);
  }, []);



  return (
    <>
      <div className="min-h-screen text-white px-4 sm:px-[10%] py-10" style={{ backgroundColor: '#151B2E' }}>
        {/* Navbar */}
        <nav className="flex justify-between items-center p-4 mx-4 my-2" style={{ backgroundColor: '#262E46', borderColor: '#ffffff60', borderRadius: 55, borderWidth: 1 }}>
          <img src='https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo2.0abcfaca.png&w=256&q=75' />
          <div className="hidden lg:flex space-x-6 items-center">
            <a href="#home" className="hover:text-blue-400">Home</a>
            <a href="#about" className="hover:text-blue-400">About us</a>
            <a href="#services" className="hover:text-blue-400">Services</a>
            <a href="#success" className="hover:text-blue-400">Success stories</a>
            <a href="#contact" className="hover:text-blue-400">Contact us</a>
            <a href="#experts" className="hover:text-blue-400">Experts</a>
          </div>
          <div className="hidden xl:flex items-center gap-2">
            <img src='https://www.egniol.co.in/_next/static/media/AiHeader.0c041c2e.svg' />
            <div className="flex items-center gap-2 bg-blue-500 p-2 rounded-full">
              <IoCallOutline className="text-white" />
              <p>1800 5717 000</p>
            </div>
          </div>
          <div className="lg:hidden">
            <button className="text-2xl">☰</button>
          </div>
        </nav>


        <header className="flex flex-col items-center justify-center text-center px-4 py-16 space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">Hum Badhayenge</h1>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">Aapka Business</h1>
          <p className="text-lg md:text-xl lg:text-2xl">One stop solution for MSMEs and startups</p>
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-lg md:text-xl">
            Learn How
          </button>
        </header>
      </div>

      <section className="bg-white relative">
        <div className="w-full max-w-4xl h-60 md:h-80 lg:h-72 xl:h-96 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Sample Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </section>
      {/* Stats Section */}
      <section className="mt-60 pb-16 px-4 bg-white">
        <div
          ref={cardsRef}
          className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >

          <style>
            {`
                            .scrollbar-hide::-webkit-scrollbar {
                                display: none;
                            }
                        `}
          </style>
          {duplicatedStats.map((stat, index) => (

            <div key={index} className="flex-shrink-0 w-[220px] h-[250px] bg-white p-1 rounded-lg shadow-lg flex flex-col space-y-2 relative">
              <div style={{ backgroundColor: '#F6FCFF', padding: '10px', flex: '1' }}>
                <h3 className="text-4xl font-bold text-[#03518F]">{stat.number}</h3>
                <p className="text-[#232A44] text-2xl font-semibold">{stat.label}</p>
                {stat.subtext && <p className="text-gray-600 text-sm">{stat.subtext}</p>}
                <div className="text-[#C4CCD7] text-6xl mb-2 text-right h-[80px] w-[80px] absolute right-1 bottom-0">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="py-6 px-4 bg-[#F6FCFF]">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Expertise helps your startup<br />grow at every stage
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-between h-full hover:border-[1.5px] border-[#03518F]">
              <img src={area.icon} className='h-[100px] w-[100px]' />
              <h4 className="text-lg font-semibold mb-2 text-[#232A44]">{area.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{area.description}</p>
              <button className="bg-[#03518F] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                Explore
              </button>
            </div>
          ))}
        </div>
      </section>
      <ImageCarousel />
      <section className="mt-60 pb-16 px-4 bg-white">
        <div
          ref={testref}
          className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >

          <style>
            {`
                            .scrollbar-hide::-webkit-scrollbar {
                                display: none;
                            }
                        `}
          </style>
          {duplicatedtest.map((test, index) => (

            <div key={index} className="flex-shrink-0 w-[250px] h-[280px] bg-white p-1 rounded-lg shadow-xl flex flex-col space-y-2 relative">
              <div style={{ backgroundColor: '#fff', height: '50px', display: 'flex', flexDirection: 'row', gap: 10, padding: '4px', alignItems: 'center' }}>
                <div style={{ borderRadius: 25, height: '50px', width: '50px' }} className='text-4xl mt-5'>{test.profile}</div>
                <div>
                  <p className="text-[#232A44] text-[12px] text-left font-bold">{test.label}</p>
                  <p className="text-gray-600 text-[10px] text-left ">{test.subtext}</p>
                </div>
              </div>
              <div style={{ backgroundColor: '#EDEFFC', padding: '5px', flex: '1', paddingTop: '20px', paddingLeft: '10px' }}>
                <p className="text-[#232A44] text-[18px] text-left ">{test.text1}</p>
                <p className="text-red-500 text-[38px] text-left font-bold">{test.text2}</p>
                <p className="text-[#232A44] text-[16px] text-left ">Debt in <span className='font-semibold'>{test.text3}</span> </p>
                <p className="text-[#232A44] text-[16px] text-left ">Under <span className='font-semibold'>{test.text4}</span> </p>

              </div>
            </div>
          ))}
        </div>
      </section>

      <div className='text-[#03518F] text-2xl font-semibold mb-10' style={{ display: 'flex', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', gap: 10 }}><p>Explore all Testimonal</p> <FaArrowRight /></div>

      <section className="py-6 bg-[#F6FCFF]">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Trusted Partners
        </h2>

        <div className="flex flex-col lg:flex-row justify-start items-center lg:space-x-2 pl-[10%]">
          {/* Partners List */}
          <div className="flex flex-row w-full lg:w-[200px] items-center">
            <div className='space-y-5'>
              <p
                className="text-gray-800 hover:text-[#03518F] hover:text-[19px] font-semibold text-[18px] text-left cursor-pointer"
                onMouseEnter={() => setHoveredPartner('ecosystem')}
              >
                Ecosystem Partners
              </p>
              <p
                className="text-gray-800 hover:text-[#03518F] hover:text-[19px] font-semibold text-[18px] text-left cursor-pointer"
                onMouseEnter={() => setHoveredPartner('business')}
              >
                Business Partners
              </p>
              <p
                className="text-gray-800 hover:text-[#03518F] hover:text-[19px] font-semibold text-[18px] text-left cursor-pointer"
                onMouseEnter={() => setHoveredPartner('communication')}
              >
                Communication Partner
              </p>
              <p
                className="text-gray-800 hover:text-[#03518F] hover:text-[19px] font-semibold text-[18px] text-left cursor-pointer"
                onMouseEnter={() => setHoveredPartner('academic')}
              >
                Academic Partner
              </p>
            </div>
            <div className="w-full lg:w-[2px] bg-[#03518F] h-[250px] hidden lg:block" />

          </div>

          {/* Divider */}

          {/* Images Display */}
          <div className="flex flex-wrap justify-center items-center space-x-4 w-full lg:w-full">

            {hoveredPartner === 'ecosystem' &&
              PartnerImages.slice(0, 1).map((item, index) => (
                <div key={index} className="space-x-4 my-2">
                  <img src={item.img} className="h-[150px] w-[300px]" alt={`partner-${index}`} />
                </div>
              ))}
            {hoveredPartner === 'academic' &&
              PartnerImages.slice(0, 1).map((item, index) => (
                <div key={index} className="space-x-4 my-2">
                  <img src={item.img} className="h-[150px] w-[300px]" alt={`partner-${index}`} />
                </div>
              ))}
            {/* Default View */}
            {hoveredPartner !== 'ecosystem' && hoveredPartner !== 'academic' &&
              PartnerImages.map((item, index) => (
                <div key={index} className="space-x-4 my-2">
                  <img src={item.img} className="h-[150px] w-[300px]" alt={`partner-${index}`} />
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="py-6 px-4 bg-[#fff]">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          We are making the headlines
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {headlines.map((item, index) => (
            <div className='flex flex-col'>
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-between h-full hover:border-[1.5px] border-[#03518F]">
                <img src={item.img} className='h-[200px] w-[200px]' />
              </div>
              <p className='text-1xl my-5 text-center'>{item.text1}</p>
            </div>
          ))}
        </div>
      </section>
      <div className='text-[#03518F] text-2xl font-semibold mb-10' style={{ display: 'flex', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', gap: 10 }}><p>See all headlines</p> <FaArrowRight /></div>

      <section className="py-6 px-4 bg-[#F8F9FE]">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Most Popular Services (Funding)
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto">
          {Loans.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[300px] mx-auto rounded-md shadow-xl hover:border-2 hover:border-red-500 transition-all duration-300 ease-in-out"
            >
              {/* Top Content Box */}
              <div className="h-[230px] bg-[#F1F3FD] py-5 px-3 rounded-t-md flex flex-col ">
                <p className="text-red-500 text-3xl font-semibold mb-2 text-left">UP TO</p>
                <p className="text-red-500 text-5xl md:text-7xl font-bold mb-3 text-left">
                  {item.description}
                </p>
                <p className="text-red-500 text-2xl text-left">{item.title}</p>
              </div>

              {/* Bottom Button Section */}
              <div className="bg-white h-[70px] p-4 rounded-b-md flex justify-between items-center">
                {/* Icon */}
                <img src={item.icon} />

                {/* Avail Now Button */}
                <div className="rounded-3xl bg-[#03518F] text-white w-[100px] flex justify-center items-center py-2 transition-all duration-300 hover:bg-white hover:text-[#03518F] hover:border-2 hover:border-[#03518F] cursor-pointer">
                  <p>Avail Now</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-[#03518F] text-2xl font-semibold my-10' style={{ display: 'flex', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', gap: 10 }}><p>View all</p> <FaArrowRight /></div>

      </section>


      <Form />
      <Footer />

    </>
  );
}

export default App;
