import { app } from "./config";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";

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

