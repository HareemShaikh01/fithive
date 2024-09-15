import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default function Reviews() {
    useEffect(() => {
        const visionsTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger: "#visions",
                start: "top 50%", 
            }
        });

        visionsTimeLine
            .from("#quote", {
                y: -300,  
                duration: 1,   
            })
            .from(".card", {
                opacity:0,
                borderRadius: "50%", 
                duration: .7,   
            });

    }, []);


    return (
        <div id='visions' className='flex flex-col items-center justify-center p-12 md:p-28 '>
            <h1 id='quote' className='text-white font-serif text-2xl md:text-4xl text-center pb-12 z-[-2]'>Fitness improves health, elevates mood, and builds resilience, enhancing every aspect of daily life</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full max-w-[900px] rounded-lg gap-[1px] overflow-hidden bg-[#9ce7c4]'>
                <div className='card overflow-hidden bg-[#52bb7e] p-3'>
                    <h1 className='text-xl font-serif py-2 font-semibold'>95% Success Rate</h1>
                    <p className='text-[#292828] font-semibold'>95%
                        achieved their fitness goals in 6 months!
                        (From our weight control program participants)</p>

                </div>


                <div className='card overflow-hidden bg-[#52bb7e] p-3'>
                    <h1 className='text-xl font-serif py-2 font-semibold'>4.8/5 Rating</h1>
                    <p className='text-[#292828] font-semibold'>4.8/5
                        average satisfaction rating
                        (Based on 250+ user reviews)</p>
                </div>
                <div className='card overflow-hidden bg-[#52bb7e] p-3'>
                    <h1 className='text-xl font-serif py-2 font-semibold'>200+ Plans</h1>
                    <p className='text-[#292828] font-semibold'>200+
                        personalized workout plans available
                        (e.g. weight loss, muscle gain)</p>
                </div>
                <div className='card overflow-hidden bg-[#52bb7e] p-3'>
                    <h1 className='text-xl font-serif py-2 font-semibold'>10,000+ Users</h1>
                    <p className='text-[#292828] font-semibold'>10,000+
                        active users on our platform, Soon you will be able join community</p>
                </div>

            </div>
        </div>
    )
}
