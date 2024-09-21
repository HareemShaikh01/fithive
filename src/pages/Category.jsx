import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useUserStore } from '../store/userSlice';
import { addWorkouts } from '../Firebase/DB';
import { markAsDone } from '../Firebase/DB';
import { getDoneEx } from '../Firebase/DB';

function Category() {
    const { userId} = useUserStore()
    const [doneEx,setDoneEx ] = useState([]);
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(-1);
    const { Id } = useParams();


    useEffect(() => {
        const fetchData = async () => {
            const url = `https://exercisedb.p.rapidapi.com/exercises/target/${Id}`;
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
                setTotal(result && result.length)
            } catch (error) {
                console.log(error.message);
            }
        };

        const gettingExcerciseIndeces = async()=>{
            const done = await getDoneEx(userId, Id);
            setDoneEx(done);
    
        }

        fetchData();
        gettingExcerciseIndeces();
    
    }, []);

    // adding workout if not already present
    useEffect(() => {
        if (total != -1) {
            addWorkouts(
                userId,
                {
                    name: Id,
                    totalEx: total,
                    doneEx: []

                },
                Id
            )
        }

    }, [total])

    const markingDone = (index)=>{
        markAsDone(userId, Id, index);
        if(!doneEx.includes(index)){
            setDoneEx([...doneEx,index]);
        }

    }

    return (
        <div id='categoryDetails'>
            <h1 className='text-center text-2xl md:text-5xl font-serif font-semibold p-10 capitalize '>Goal : {Id}</h1>


            {data.length > 0 ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
                    {data.map((item, index) => (
                        <div key={index} className='flex flex-col items-center p-4 rounded-lg gap-4'>
                            <p className='text-green-500 text-lg font-serif'>{item.id}</p>
                            <h1 className='text-xl font-serif md:text-2xl text-center capitalize'>{item.name}</h1>
                            <img className='w-full max-w-[300px] rounded-xl' src={item.gifUrl} alt={item.name} />
                            <button onClick={()=>markingDone(index)} className={`${doneEx.includes(index) ? 'bg-[#444343]' : 'bg-green-500'
                                } px-8 rounded-2xl text-black font-semibold`}>Done</button>
                            <ul className='list-decimal p-4'>
                                <h1 className='text-lg text-green-500'>Instructions</h1>
                                {item.instructions.map((list, i) => {
                                    return <li key={i}>
                                        {list}
                                    </li>
                                })}
                            </ul>
                        </div>

                    ))
                    }
                </div>
            ) : (
                <div className='flex justify-center items-center text-3xl md:text-5xl text-white font-bold font-mono w-full py-40'>
                    <i className="fa-solid fa-dumbbell"></i>
                </div>
            )}


        </div>
    )
}

export default Category