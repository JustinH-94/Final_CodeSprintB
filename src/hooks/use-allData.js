import { useEffect, useState } from 'react'
import { UserCollection } from '../data/firebase';

function UseAllData(userID) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const onNext = (snapshot) =>{
            setIsLoading(false);
            const docs = snapshot.docs;
            setData(docs);
        };

        const onError = (error) =>{
            setIsLoading(false);
            console.error(error);
        };
        const unsubscribe = UserCollection.doc(userID).collection("M4GCollection").onSnapshot(onNext, onError);

        return unsubscribe;
    }, [userID])
    return [data, isLoading];
}

export default UseAllData
