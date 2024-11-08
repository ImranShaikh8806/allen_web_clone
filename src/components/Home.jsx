import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import home1Img from "../images/allenImg/Home1.webp";
import slide1 from "../images/allenImg/slide1.webp";
import slide2 from "../images/allenImg/slide2.webp";
import slide3 from "../images/allenImg/slide3.webp";
import slide4 from "../images/allenImg/slide4.webp";
import Signin from './Signin'; 
import Button from './Button';
import slide5 from "../images/allenImg/slide5.png"
import slide6 from "../images/allenImg/slide6.png"
import slide7 from "../images/allenImg/slide7.webp"
import slide8 from "../images/allenImg/slide8.webp"
import slide9 from "../images/allenImg/slide9.webp"



export default function Home() {
  const [currImage, setCurrImg] = useState(0);
  const [currImg2,setcurrImg2] = useState(0)
  const [currImg3,setCurrImg3] = useState(0)
  const [isSigninOpen, setIsSigninOpen] = useState(false); 
  const text = ["ALLEN Online Programs  JEE (Adv.) 2024 Results","ALLEN Online Programs NEET (UG) 2024 Results"]

  const slides = [slide1, slide2, slide3, slide4];
  const slides2 = [slide5,slide6,slide7]
  const slides3 = [slide8,slide9]


  const next = () => {
    setCurrImg((curr) => (curr + 1) % slides.length);
  };

  const nextForSecondSlide = () => {
    setcurrImg2((cur)=>(cur+1) % slides2.length)
  }

  const nextForThirdSlide = ()=>{
    setCurrImg3((curr)=>(curr+1)% slides3.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(()=>{
    const interval = setInterval(() => {
      nextForSecondSlide()
    }, 4000);
    return ()=>clearInterval(interval)
  },[])


  useEffect(()=>{
    const interval = setInterval(() => {
      nextForThirdSlide()
    }, 2000);
    return ()=>clearInterval(interval)
  },[])


  return (
    <div>
      <div className='container mt-10'>

          <div className='homeImage w-full h-14'>
            <div className='flex justify-center'>
              <img src={home1Img} alt="Home" className='md:w-8/12 md:h-11 w-56 h-20' />
            </div>
          </div>

        <div className='lg:flex flex flex-col lg:flex-row items-center mt-32 home'>

              <div className='lg:ml-40'>
                 <div className='pb-6 text-white font-bold text-3xl'>
                   <p>Your Dream.</p>
                   <p>Our Expertise.</p>
                 </div>
                 <div className='font-medium text-lg md:text-xl text-white mt-8'>
                  What brings you to us today?
                </div>

                 <div className='mt-8 lg:space-x-4 flex '>
                      <Button text="NEET"/>
                      <Button text="JEE"/>
                      <Button text="Grade 6-10"/>
                    </div>
               </div>

              <div className='overflow-hidden relative lg:ml-40 w-80 lg:-mt-10 mt-24 pb-24 -z-10 '>

                 <div className=' flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${currImage * 100}%)` }}>
                   {slides.map((img, index) => (
                    <img key={index} src={img} alt="" className='w-full h-auto' />
                   ))}
                 </div>

                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 mb-4">
                    {slides.map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${currImage === i ? "bg-white p-2" : "bg-opacity-50 bg-white"}`}
                      />
                    ))}
                  </div>

              </div>
        </div>

        {isSigninOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <Signin onClose={() => setIsSigninOpen(false)} />
          </div>
        )}


         





<div className="secondSlider w-full  flex justify-center items-center ">
  <div className="overflow-hidden relative w-2/3 mt-40 pb-24 flex justify-center items-center -z-10">
    <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currImg2 * 100}%)` }}>
      {slides2.map((img, index) => (
        <img key={index} src={img} alt="" className="w-full h-auto" />
      ))}
    </div>

    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 mb-4">
      {slides2.map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full ${currImg2 === i ? "bg-white p-2" : "bg-opacity-50 bg-white"}`}
        />
      ))}
    </div>
  </div>
</div>


      <div>
        <div>
          <h1 className='font-bold text-xl md:text-5xl text-center mb-10 mt-28'>Our remarkable results in 2024</h1>
        </div>
        <div className='thirdslider w-full lg:flex  justify-center items-center mt-32'>
  <div className='overflow-hidden relative flex justify-center items-center -z-10'>
    <div 
      className='flex transition-transform duration-500' 
      style={{ transform: `translateX(-${currImg3 * 100}%)` }}
    >
      {slides3.map((img, i) => (
        <div key={i} className='flex-shrink-0 w-full h-full flex lg:flex-row flex-col justify-center items-center'>
          
          <img src={img} alt="" className='h-72 w-96 rounded-lg' />
        <div className='spacey-5 ml-10'>
        <p className=''>{text[i]}</p>
        <Link to="/results" className=''>View detailed results</Link>
        </div>
        </div>
      ))}
    </div>
  </div>
</div>

      </div>
      </div>
    </div>
  );
}
