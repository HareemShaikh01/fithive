import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Authcard from './Authcard';
import { Link } from 'react-router-dom';

export default function Hero() {
  const[ authVisibility, setAuthVisibility] = useState(false);

  const tl = gsap.timeline();

  useEffect(() => {
    tl.from(".logohead span", {
      y: 70,
      stagger: 0.1,
      opacity: 0,
      delay: 1

    })

    tl.from(".intro", {
      y: 70,
      stagger: 0.3,
      opacity: 0,
    })

    tl.from(".btn", {
      rotateX: "90deg",
      duration: .8
    })

  }, [])

 


  return (
    <div className=' bg-[#00000098]'>
      <video className='object-cover h-screen w-full absolute top-0 z-[-1]' autoPlay muted loop>
        <source src='./bg-video.mp4' type='video/mp4' />
      </video>
      <div className='h-[90vh] flex flex-col justify-center items-center text-white font-bold text-2xl md:text-4xl p-14 text-center'>

        <h1 className='logohead font-bold text-4xl md:text-6xl text-white tracking-widest font-mono my-5'>
          <span className='left'>F</span><span className='left'>i</span><span className='left'>t</span>
          <span className='text-green-500 text-5xl md:text-6xl'>H</span>
          <span className='right'>i</span><span className='right'>v</span><span className='right'>e</span>
        </h1>

        <h1 className='font-semibold md:font-semibold'>
          <div className='overflow-hidden py-4'>
            <p className='intro'>
              Transfrom Your Body, Transfrom Your Life
            </p>
          </div>
          <div className='overflow-hidden'>
            <p className='intro'>
              Start Your Fitness Journey Today
            </p>
          </div>
        </h1>


        <div className='flex flex-col md:flex-row gap-1'>
         <Link to="/profile">
         <button className='btn mt-10 text-white w-60 md:w-80 border-2 border-green-500 text-nowrap text-lg md:text-3xl bg-[#0000009c] font-light font-serif'>
            Admin Panel
            <i className="fa-solid px-2  md:text-3xl fa-dumbbell inline text-xl"></i>
          </button></Link>

          <button onClick={()=>setAuthVisibility(true)}  className='btn my-2 md:mb-0 md:mt-10 text-black bg-[#52bb7e] w-60 md:w-80 text-nowrap text-lg md:text-3xl font-serif'>
            Log In
            <i className="fa-solid px-2  md:text-3xl fa-right-to-bracket inline text-xl"></i>
          </button>
        </div>


      </div>

      {authVisibility && <Authcard setVisibility={setAuthVisibility}/>}
    </div>
  )
}
