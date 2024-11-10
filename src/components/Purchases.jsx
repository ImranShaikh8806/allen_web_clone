import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Purchases() {
    const [purchase, setPurchases] = useState([]); 
    const [showPurchases, setShowPurchases] = useState(false);
    const [loading, setLoading] = useState(true);
    
    const token = localStorage.getItem("token");

    
    const fetchPurchases = async () => {
        if (!token) return; 
        
        try {
            setLoading(true); 
            const response = await axios("https://backend-for-allen-git-main-imrans-projects-b4c3a639.vercel.app/user/purchases", {
                headers: {
                    "token": token
                }
            });

            console.log("pur", response.data);
            setPurchases(response.data.coursesData);
            setShowPurchases(true);
        } catch (error) {
            console.error("Error fetching purchases:", error);
            setShowPurchases(false); 
        } finally {
            setLoading(false); 
        }
    }

    useEffect(() => {
        if (token) {
            fetchPurchases(); 
        }
    }, [token]); 

    if (loading) {
        return <div>Loading...</div>; 
    }

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
                                <div><img src={val.imageUrl} className='mt-4' alt="Course Image" /></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='w-full mt-20'>
                        <div className='flex justify-center items-center'>
                            <p className='font-bold text-xl'>No purchases found ...</p>
                        </div>
                    </div>
                )
            ) : (
                <div className='w-full mt-20'>
                    <div className='flex justify-center items-center'>
                        <p className='font-bold text-xl'>You need to be logged in to see your purchases.</p>
                    </div>
                </div>
            )}
        </div>
    )
}
