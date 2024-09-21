import React, { useEffect } from 'react'
import { useUserStore } from '../store/userSlice'
import { collection, documentId } from 'firebase/firestore';
import { EmailAuthCredential } from 'firebase/auth/web-extension';

function Profile() {
    const { userName, userEmail } = useUserStore();

    useEffect(() => {
        console.log(userName, userEmail);
    }, [])


    return (
        <div id='profile' className='flex flex-col md:flex-row gap-10  p-4 py-10' >

            {/* personal data */}
            <div className='md:w-1/2 pt-10'>
                <div className='flex justify-center'>
                    <img className='w-60 h-60 border-2 border-green-500 object-cover rounded-full' src="./wallpaperflare.com_wallpaper.jpg" alt="profile photo" />

                </div>
                <h1 className='uppercase font-mono font-bold text-2xl text-center'>{userName}</h1>
                <h3 className='text-center text-green-500 py-2'>{userEmail}</h3>

            </div>

            {/* tasks */}
            <div className='w-full'>
                <h1 className='text-3xl md:text-5xl font-semibold font-serif text-center tracking-widest'>Goals</h1>

                <ul className='p-6'>
                    <li className='py-4 flex justify-between'>
                        <div>
                            <i className="fa-solid fa-dumbbell text-white px-2 text-xl md:text-2xl rotate-90"></i>
                            <h1 className='inline text-xl md:text-2xl font-semibold px-4'>Abs</h1>
                        </div>

                        <div className=" text-xl md:text-3xl">
                            <span className='text-green-500 text-2xl font-semibold font-mono'>7</span>/8 Days
                        </div>
                    </li>
                    <hr />



                </ul>

            </div>


        </div>
    )
}

export default Profile


// user(collection)
//     documentId
//         name
//         email
//         workouts:[
//             {
//                 name,
//                 done,
//                 total,
//                 array:[]
//             }
//         ]
