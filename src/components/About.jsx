import React, { useEffect, useState } from 'react';
import slide1 from "../images/allenImg/sampleImg.png";
import aboutImg from "../images/allenImg/about1.webp"


export default function About() {
  const words = ["we solve problems", "we drive success", "we create leaders"];
  const [text, setText] = useState("");
  let i = 0;
  let j = 0;
  let isDeleting = false;
  const [currImage, setCurrImg] = useState(0);
  const slides = [slide1, slide1, slide1];


  // Typing effect logic
  function type() {
    const currentWord = words[i];

    if (isDeleting) {
      setText(currentWord.substring(0, j - 1));
      j--;
      if (j === 0) {
        isDeleting = false;
        i++;
        if (i === words.length) {
          i = 0;
        }
      }
    } else {
      setText(currentWord.substring(0, j + 2));
      j++;
      if (j === currentWord.length) {
        isDeleting = true;
      }
    }
    setTimeout(type, isDeleting ? 200 : 400);
  }


  useEffect(() => {
    type(); 
  }, []);

  
  // Image slider functionality
  const next = () => {
    setCurrImg((curr) => (curr + 1) % slides.length);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      {/* Container for Text and Image */}
      <div className="lg:flex lg:flex-row flex-col lg:justify-center lg:items-center justify-center items-center about-container space-x-7">
        {/* Text container */}
        <div className="w-1/3 flex flex-col justify-center  h-screen" style={{}}>
          <h1 className='font-bold text-8 md:text-5xl'>At ALLEN,</h1>
          <h1
            id="typewriter"
            className="text-4xl font-bold mt-7"
            style={{ height: "80px", color:"#04ca8f"}} 
          >
            {text}
          </h1>
          <p className='font-normal text-sm md:text-base mb-2'>Wherever you are, ALLEN is there for you. Study in Kota, study at a centre near you, or online.</p>
              <div className='flex mt-4 space-x-8'>
                  <div>
                      <h2 className='font-bold text-4xl text-white md:text-1'>36+</h2>
                      <p className='font-semibold text-sm md:text-base'>Years of teaching</p>
                  </div>

                  <div>
                        <h2 className='font-bold text-4xl text-white md:text-16'>30L+</h2>
                        <p className='font-semibold text-sm md:text-base'>Students mentord</p>
                  </div>

                  <div>
                        <h2 className='font-bold text-4xl text-white md:text-16'>7.4K+</h2>
                        <p className='font-semibold text-sm md:text-base'>Top-notch faculty</p>
                  </div>
              </div>
        </div>

        {/* Image slider container */}
        <div className="relative w-1/3 h-96 overflow-hidden -z-10">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${currImage * 100}%)` }}
          >
            {slides.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-80 object-cover"
              />
            ))}
          </div>

          {/* Slide indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 ">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${currImage === i ? "bg-white p-2" : "bg-opacity-50 bg-white"}`}
              />
            ))}
          </div>
        </div>

      </div>

      <div className='lg:h-auto lg:w-full '>
        <div className='lg:flex lg:items-center lg:justify-center flex items-center justify-center'>
        <img src={aboutImg} alt="" className='aboutImg h-60 w-20 lg:h-full lg:w-full'/>
        </div>
      </div>
    </div>
  );
}
