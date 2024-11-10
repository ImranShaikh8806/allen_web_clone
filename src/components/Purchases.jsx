import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Purchases() {
    const [purchase, setPurchases] = useState([]); 
    const [showPurchases, setShowPurchases] = useState(false);
    const [loading, setLoading] = useState(true);
    
    const token = localStorage.getItem("token");

    // Fetch purchases only when the token is available
    const fetchPurchases = async () => {
        if (!token) return; // Do nothing if no token
        
        try {
            setLoading(true); // Start loading before the request
            const response = await axios("http://localhost:3000/user/purchases", {
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
            setLoading(false); // Stop loading after the request finishes
        }
    }

    useEffect(() => {
        if (token) {
            fetchPurchases(); // Fetch purchases when token is available
        }
    }, [token]); // Dependency on token ensures this runs when token changes

    if (loading) {
        return <div>Loading...</div>; // Optionally show a loading state
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
