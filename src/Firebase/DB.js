import { app } from "./config";
import { getFirestore, setDoc, doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";

const db = getFirestore(app);

export const addUser = async (user, userId) => {
    const docRef = doc(db, 'users', userId);
    try {
        await setDoc(docRef, user);
        console.log('User added with ID:', userId);
    } catch (e) {
        console.error('Error adding user:', e);
    }
};



export const getUserById = async (userId, setUserState) => {
    const docRef = doc(db, 'users', userId);

    try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const userData = docSnap.data();
            setUserState(userData);
            console.log('User data:', userData);
        } else {
            console.log('No such user!');
        }
    } catch (e) {
        console.error('Error getting user:', e);
    }
};

export const addWorkouts = async (userId, obj, category) => {
    const docRef = doc(db, "users", userId);

    try {
        // Update the 'workouts' array field with the new workout using arrayUnion
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const workouts = docSnap.data().workouts;
            
            if (!workouts.some(workout => workout.name == category)) {
                await updateDoc(docRef, {
                    workouts: arrayUnion(obj)  // Add the new workout to 'workouts' array
                });
                alert(`Lets start excercises for ${category}`);
            }
        }


    } catch (e) {
        alert("Error : workout is not added to your task bar")
        console.error('Error adding workout to array:', e); // Log any errors
    }

}

export const markAsDone = async (userId, category, index) => {
    const docRef = doc(db, "users", userId);

    try {
        const docSnap = await getDoc(docRef);
        const userData = docSnap.data();
        const workouts = userData.workouts;
        

        // Find the index of the specific workout
        const categoryIndex = workouts.findIndex(workout => workout.name === category);
        console.log(categoryIndex);
        

        if (categoryIndex !== -1) {
            // Check if the index is already included
            const doneExcercises = workouts[categoryIndex].doneEx;

            workouts[categoryIndex].doneEx=[...doneExcercises,index];

            if (!doneExcercises.includes(index)) {
                // Update the Firestore document using arrayUnion
                await updateDoc(docRef, {
                    workouts: workouts
                });

            }
        }
    } catch (error) {
        console.log("Error in marking the exercise as done:", error);
    }
};

export const getDoneEx = async (userId, category) => {
    const docRef = doc(db, "users", userId);

    try {
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const user = docSnap.data();

            const workouts = user.workouts;
            console.log(typeof workouts);
            
            const categoryIndex = workouts.findIndex(workout => workout.name === category);

            if (categoryIndex !== -1) {
                const done = workouts[categoryIndex].doneEx;

                console.log("Done exercises:", done);

                return done;
            } else {
                console.log(`Category "${category}" not found in workouts.`);
                return [];
            }
        } else {
            console.log("User document not found.");
            return [];
        }
    } catch (error) {
        console.error("Error getting done exercises data:", error);
        return [];
    }
};
