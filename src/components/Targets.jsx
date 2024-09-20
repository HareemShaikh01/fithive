import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function Targets() {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState("abs")

    useEffect(() => {
        const fetchData = async () => {
            // const url = 'https://exercisedb.p.rapidapi.com/exercises/targetList';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'bb8fb435d6msh2e7c42a4d67130dp16c620jsn7e2e946b63f2',
                    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setData(result);
                console.log(result);
                
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchData();
    }, []);

  useEffect(() => {
        gsap.from(".categoryhead", {
            y: -90,
            opacity:0,
            duration: 1,
            scrollTrigger: {
                trigger: "#category",
                start: "top 50%",
            }
        });

        gsap.from("#categories", {
            x: 100,
            opacity:0,
            duration: 1,
            scrollTrigger: {
                trigger: "#category",
                start: "top 50%",
            }
        });

        gsap.from("#startbtn", {
            x: -100,
            opacity:0,
            duration: 1,
            scrollTrigger: {
                trigger: "#category",
                start: "top 50%",
            }
        });
    }, []);

    const selectCategory = (e) => {
        setCategory(e.target.value);
    }


    return (
        <div id='category'>
            <div className='h-[80vh] category flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center max-w-[400px] md:max-w-[600px] gap-10'>
                    <h1 className='categoryhead text-3xl md:text-5xl text-white font-bold text-center'>
                        Choose the Exercise which best fits your need!
                    </h1>
                    <div className='flex flex-col justify-center items-center gap-4 '>
                        <select onChange={selectCategory} className='bg-transparent text-white text-xl border-2 border-green-500 font-serif w-60 md:w-80 outline-none capitalize p-2 px-4' name="category" id="categories">
                            <option value="default">Select Category</option>
                            {
                                (Array.isArray(data) && data.length > 0) ? (
                                    data.map((item, index) => (
                                        <option className='text-black capitalize' key={index} value={item}>{item}</option>
                                    ))
                                ) : (
                                    <option value="">No options available</option>
                                )
                            }
                        </select>
                        <Link to={`/category/${category}`}>
                        <button id='startbtn' className='text-black px-12 font-serif font-semibold text-2xl  bg-[#52bb7e] outline-none w-60 md:w-80'>Start
                            <i className="fa-solid px-2  md:text-3xl fa-dumbbell inline text-xl"></i>
                        </button>
                        
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

