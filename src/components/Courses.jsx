import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Courses() {
    const [data, setData] = useState([]);
    const [message, setMessage] = useState(''); 

    
    const fetchApi = async () => {
        const response = await axios("http://localhost:3000/course/preview");
        setData(response.data.courses);
        console.log(response.data.courses[0]);
        return response.data;
    };

    useEffect(() => {
        fetchApi();
    }, []);

    
    const handleBuyCourse = async (courseId) => {
        const token = localStorage.getItem("token");

        if (!token) {
            alert("Please log in to buy the course.");
            return; 
        }

        try {
           
            const response = await axios.post(
                "http://localhost:3000/course/purchase", 
                { courseId }, 
                { headers: { "token": token } }
                
            );
            alert("You have successfully bought the course")
            setMessage(response.data.message); 
        } catch (error) {
            console.error("Error during purchase:", error);
            setMessage("There was an error processing your purchase.");
        }
    };


    return (
        <div className="flex flex-col">
            <div className="container flex md:flex-row flex-col mt-20 px-4 md:px-0">
                <div className="ml-52">
                    <h1 className="pb-6 text-white font-bold text-3xl">Online Programs</h1>
                    <p className="font-thin text-white max-w-lg">
                        To get the full ALLEN Learning Experience, explore the Ultimate Series of Programs for JEE, NEET, and Olympiads...
                    </p>
                </div>
                <div>
                    <img
                        src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729249760%2Fu_c_1_t79muq.webp&w=828&q=75"
                        alt="course img1"
                        className="w-64 ml-20 mt-5"
                    />
                </div>
            </div>

            <div className="container mt-20">
                <p className="font-bold text-xl md:text-2xl leading-6 md:leading-7 ml-52">
                    Discover the perfect online program
                </p>
              
                <div className="flex flex-wrap justify-center mt-8 gap-7 ml-20">
                    {data.map((val) => (
                        <div
                            key={val._id}
                            className="flex flex-col p-4 justify-between bg-blue-600 w-full max-w-xs rounded-2xl"
                        >
                            <p className="font-semibold text-sm leading-4 md:text-base md:leading-5 mt-2.5 md:mt-3 text-white">
                                Nurture Online program (All subjects)
                            </p>
                            <div className="mt-6">Title: {val.title}</div>
                            <div className="mt-3">Description: {val.description}</div>
                            <div className="mt-3">Price: {val.price}</div>
                            <div
                                className="mt-6 text-white cursor-pointer"
                                onClick={() => handleBuyCourse(val._id)}
                            >
                                Buy now...
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

