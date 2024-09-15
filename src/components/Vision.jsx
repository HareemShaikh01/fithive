import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Vision() {
  useEffect(() => {
    const commentTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#reviews",
        start: "top 80%",
        once: true
      }
    });

    commentTimeLine
      .from(".user-name", {
        x: -100,
        opacity: 0,
        stagger: 0.3,
        duration:0.5
      })
      .from(".user-star", {
        x: -50,
        opacity: 0,
        duration:0.5

      }) 
      .from(".user-comment", {
        x: -50,
        opacity: 0,
        duration:0.5

      }); 

  }, []);

  return (
    <div id='reviews'>
      <h1 className='text-center text-2xl md:text-3xl font-serif m-8 text-white'>What Our Users Say About Us?</h1>
      <div className='text-white p-4 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 font-serif gap-4'>
        <div className='overflow-hidden'>
          <h1 className='user-name text-xl md:text-2xl font-semibold'>Sarah T.</h1>
          <div className='user-star text-green-400 text-xl md:text-2xl py-2'> ★★★★★ </div>
          <p className='user-comment text-gray-300 italic '>FitHive's daily workout tasks keep me organized and motivated. The progress tracking is a huge plus. I've seen great results quickly!</p>
        </div>

        <div className='overflow-hidden'>
          <h1 className='user-name text-xl md:text-2xl font-semibold'>Alex W.</h1>
          <div className='user-star text-green-400 text-xl md:text-2xl py-2'> ★★★★★ </div>
          <p className='user-comment text-gray-300 italic '>FitHive helps me stick to my workouts with its simple daily tasks. More workout variations would be nice, but it's very effective overall.</p>
        </div>

        <div className='overflow-hidden'>
          <h1 className='user-name text-xl md:text-2xl font-semibold'>Jessica M.</h1>
          <div className='user-star text-green-400 text-xl md:text-2xl py-2'> ★★★★★ </div>
          <p className='user-comment text-gray-300 italic '>I love FitHive's straightforward daily tasks and progress tracking. It's perfect for maintaining consistency and achieving my fitness goals.</p>
        </div>

        <div className='overflow-hidden'>
          <h1 className='user-name text-xl md:text-2xl font-semibold'>David H.</h1>
          <div className='user-star text-green-400 text-xl md:text-2xl py-2'> ★★★★★ </div>
          <p className='user-comment text-gray-300 italic '>FitHive provides a simple workout structure but lacks customization options. It keeps me on track, though I'd like more features.</p>
        </div>
      </div>
    </div>
  );
}
