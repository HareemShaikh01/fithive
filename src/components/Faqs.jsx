import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(()=>{
      gsap.from("#faq-head",{
        y:-100,
        scrollTrigger:{
            trigger:"#faqs",
            start:"top 50%"
        }
      })
        
       gsap.from(".faq-item",{
          x:-100,
          opacity:0,
          stagger:0.2,
          scrollTrigger:{
            trigger:"#faqs",
            start:"top 50%"
          }
       })

    },[])

    const faqs = [
        {
            question: 'What types of workouts are available?',
            answer: 'We offer a variety of workouts including strength training, cardio, yoga, and flexibility exercises. You can choose based on your fitness goals.'
        },
        {
            question: 'Do I need any special equipment?',
            answer: 'While some workouts require basic equipment like dumbbells or resistance bands, many of our routines can be done with just body weight.'
        },
        {
            question: 'Can I track my progress?',
            answer: 'Yes, our platform includes tools to track your workout history, progress, and performance metrics to help you stay motivated and achieve your goals.'
        },
        {
            question: 'Are there workout plans for beginners?',
            answer: 'Absolutely! We have a range of beginner-friendly workout plans designed to help you start slowly and build your fitness level progressively.'
        },
        {
            question: 'How do I get started with a workout plan?',
            answer: 'Simply sign up, choose a workout plan that suits your goals and fitness level, and follow the daily tasks. You can adjust the plan as needed.'
        },
        {
            question: 'Can I access the workouts on mobile devices?',
            answer: 'Yes, our platform is fully accessible on both mobile and desktop devices, so you can work out anytime, anywhere.'
        }
    ];

    const toggleAnswer = (e, index) => {
        const target = e.target;
    
        gsap.to('.faq-question', { rotateZ: '0deg', duration: 0.2, clearProps: 'transform' });
        gsap.to(target, { rotateZ: '360deg', duration: 0.5 });
    
        setOpenIndex(openIndex === index ? null : index);
      };

    return (
        <div className='flex justify-center overflow-hidden mt-20'>

            <div id='faqs' className="text-white pt-0 sm:pt-0 md:pt-0 p-6 sm:p-12 md:p-20 md:w-[900px] w-[500px]">
            <hr />

                <h2 id="faq-head" className='text-center  text-2xl md:text-4xl py-6 font-serif'>Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <div className='py-2 faq-item' key={index}>
                        <div className='flex justify-between' >
                            <h3 className='text-[17px]'>{faq.question}</h3>
                            <div className='text-xl font-bold cursor-pointer border-green-400 border-2 w-6 h-6 flex justify-center items-center rounded-full faq-question' onClick={(e) => toggleAnswer(e,index)}>{openIndex === index ? '-' : '+'}</div>
                        </div>
                        {openIndex === index && (
                            <div>
                                <p className='italic text-md text-gray-300 p-2'>{faq.answer}</p>
                            </div>
                        )}

                    </div>

                ))}
            </div>
        </div>
    );
};

export default FAQs;
