import React, { useEffect, useRef, useState } from 'react'
import { useUserStore } from '../store/userSlice'
import { getWorkouts } from '../Firebase/DB';

function Profile() {
    const { userId, userName, userEmail } = useUserStore();
    const [workouts, setWorkouts] = useState([]);
    const [imgUrl, setImgUrl] = useState(localStorage.getItem("profileUrl") || "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg")
    const fileRef = useRef(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await getWorkouts(userId);  // Await for getWorkouts
                setWorkouts(response);
            } catch (error) {
                setWorkouts([]);
            }
        };

        fetchWorkouts();
        console.log(workouts);
    }, []);
    const toBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    
      const handleImgUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
          const base64 = await toBase64(file);  // Convert the file to a base64 string
          setImgUrl(base64);  // Set the base64 string as the imgUrl
          localStorage.setItem("profileUrl", base64);  // Store the base64 string in localStorage
        }
      };


    const handleImgClick = () => {
        fileRef.current.click();
    }


    return (
        <div id='profile' className='flex flex-col md:flex-row gap-10  p-4 py-10' >

            {/* personal data */}
            <div className='md:w-1/2 pt-10'>
                <div className='flex justify-center'>
                    <img onClick={handleImgClick} className='w-60 h-60 border-2 border-black object-cover rounded-full' src={imgUrl} alt="profile photo" />
                    <input onChange={handleImgUpload} ref={fileRef} className='hidden' type="file" accept="image/*" />

                </div>
                <h1 className='uppercase font-serif font-bold text-2xl text-center mt-4'>{userName}</h1>
                <h3 className='text-center text-green-500 py-2'>{userEmail}</h3>

            </div>

            {/* tasks */}
            <div className='w-full'>
                <h1 className='text-3xl md:text-5xl font-semibold font-serif text-center tracking-widest'>Goals</h1>

                <ul className='p-6'>
                    {workouts.length > 0 ? (
                        workouts
                            .filter(workout => workout.doneEx.length < workout.totalEx) // Filter out completed workouts
                            .map((workout, index) => (
                                <div key={index}>
                                    <li className='py-4 flex justify-between'>
                                        <div>
                                            <i className="fa-solid fa-dumbbell text-white px-2 text-xl md:text-2xl rotate-90"></i>
                                            <h1 className='inline text-xl md:text-2xl font-semibold px-4'>{workout.name}</h1>
                                        </div>

                                        <div className="text-xl md:text-3xl">
                                            <span className='text-green-500 text-2xl font-semibold font-mono'>{workout.doneEx.length}</span>/{workout.totalEx} Days
                                        </div>
                                    </li>
                                    <hr />
                                </div>
                            ))
                    ) : (
                        <p className='text-center text-xl md:text-2xl font-semibold p-20'>No workouts started</p>
                    )}

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
