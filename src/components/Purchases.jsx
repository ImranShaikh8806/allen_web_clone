import axios from 'axios'
import React, { useEffect, useState } from 'react'

const token = localStorage.getItem("token")
console.log(token);

export default function Purchases() {
    const [purchase, setPurchases] = useState([]); 
    const [showPurchases, setShowPurchases] = useState(false);

    
    const fetchPurchases = async () => {
        try {
            const response = await axios("http://localhost:3000/user/purchases", {
                headers: {
                    "token": token
                }
            });

            console.log("pur",response.data);
            setPurchases(response.data.coursesData);
            setShowPurchases(true);
        } catch (error) {
            console.error("Error fetching purchases:", error);
            setShowPurchases(false); 
        }
    }

   
    useEffect(() => {
        if (token) {
            fetchPurchases();
        }
    }, [token]); 

    return (
        <div>
            {showPurchases ? (
                purchase.length > 0 ? (
                    <div className="flex flex-wrap justify-center mt-8 gap-7 ml-20">
                    {purchase.map((val) => (
                        <div
                            key={val._id}
                            className="flex flex-col p-4 justify-between items-center bg-blue-600 w-full max-w-xs rounded-2xl"
                        >
                            <p className="font-semibold text-sm leading-4 md:text-base md:leading-5 mt-2.5 md:mt-3 text-white">
                                Nurture Online program (All subjects)
                            </p>
                            <div className="mt-6 font-bold">Title: {val.title}</div>
                           
                            
                            <div><img src={val.imageUrl} className='mt-4' /></div>
                            
                        </div>
                    ))}
                </div>
            
                ) : (
                    <div className='w-fullv mt-20'>
                        <div className='flex justify-center items-center'>
                            <p className='font-bold text-xl'>No purchases found ...</p>
                        </div>
                    </div>
                )
            ) : null} 
        </div>
    )
}

