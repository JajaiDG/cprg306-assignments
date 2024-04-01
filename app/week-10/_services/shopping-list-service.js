import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Function to retrieve all items for a specific user
export const getItems = async (userId) => {
    const itemsCollection = collection(db, "users", userId, "items");
    const itemsQuery = query(itemsCollection);
    const querySnapshot = await getDocs(itemsQuery);
    const items = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return items;
  };
  
  // Function to add a new item to a specific user's list
  export const addItem = async (userId, item) => {
    const itemsCollection = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsCollection, item);
    return docRef.id;
  };