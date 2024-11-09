import React, { useState } from 'react'
import imageFile from "../images/allenLogo/allen.png"
import "../index.css"
import Signin from './Signin'
import { useAuth } from './auth.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';//cross icon from fontawesome 
import { faBars } from '@fortawesome/free-solid-svg-icons'//list icon from fontawesome
import { faPhone } from '@fortawesome/free-solid-svg-icons'


export default function Header() {
    const [isLoginVisible,setIsLoginVisble] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const {userName,setUserName} = useAuth()
    const navigate = useNavigate()

    const openLogin=()=>{
        setIsLoginVisble(true)
    }

    const closeLogin = ()=>{
        setIsLoginVisble(false)
    }

    const handleLogout = () =>{
        localStorage.removeItem("token")
        setUserName("")
        navigate("/")
    }

  return (
<div className='flex items-center justify-around lg:justify-around'>

       <div className='flex'>
       <button 
            className="lg:hidden relative -mt-7 mr-6 text-6xl"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <FontAwesomeIcon icon={faXmark} className='h-7 w-7'/> : <FontAwesomeIcon icon={faBars} className='h-7 w-7'/>}
        </button>
 
                <div className={`lg:hidden fixed top-0 left-0 h-full w-[18rem] bg-[#0f1825] transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? '-translate-x-0' : '-translate-x-full'} z-50`}>
                    <div className="flex justify-end p-4">
                        <button 
                            onClick={() => setIsSidebarOpen(false)}
                            className="text-2xl"
                        >
                         <span className='absolute left-4 text-3xl font-bold'>Allen </span>
                         <FontAwesomeIcon icon={faXmark} className='h-7 w-7'/>   
                        </button>
                    </div>
                    
                    <div className="flex flex-col px-4 gap-4 mt-7">
                        
                        <div className="relative group">
                            <div className="py-2 font-medium">Courses</div>
                            <div className="pl-4 flex flex-col gap-2 mt-1">
                                <Link to="/" className="text-gray-300">Neet</Link>
                                <Link to="/" className="text-gray-300">Jee</Link>
                                <Link to="/" className="text-gray-300">Class 6-10</Link>
                            </div>
                        </div>

                        
                        <div className="relative group">
                            <div className="py-2 font-medium">Test Series</div>
                            <div className="pl-4 flex flex-col gap-2 mt-1">
                                <Link to="/" className="text-gray-300">Online Programs</Link>
                                <Link to="/" className="text-gray-300">Neet</Link>
                                <Link to="/" className="text-gray-300">Jee</Link>
                                <Link to="/" className="text-gray-300">Class 6-10</Link>
                            </div>
                        </div>

                        
                        <div className="relative group">
                            <div className="py-2 font-medium">Scholarships</div>
                            <div className="pl-4 flex flex-col gap-2 mt-1">
                            <Link to="/" className="text-gray-300">ADSAT</Link>
                            <Link to="/" className="text-gray-300">TALENEX</Link>                            </div>
                        </div>

                       
                        <div className="relative group">
                            <div className="py-2 font-medium">Results</div>
                            <div className="pl-4 flex flex-col gap-2 mt-1">
                            <Link to="/" className="text-gray-300">Jee</Link>
                            <Link to="/" className="text-gray-300">Class 6-10</Link>
                            </div>
                        </div>    
                    </div>
                </div>


        <div className='lg:ml-32'>
            <Link to="/">
            <img src={imageFile} alt="allen logo" className='allen-logo lg:w-32 lg:h-auto sm:-ml-8'/></Link>
        </div>
       </div>

        <div className='hidden lg:flex gap-3 ml-4  lg:gap-7 md:-ml-20'>

            <div>
                <div className=' relative group'>
                     <div className=" lg:font-bold border-b-4 rounded-sm border-transparent group-hover:border-blue-600 transition duration-2000">Courses</div>
                        <div className='absolute   hidden group-hover:block flex-col gap-2 w-64 h-40 py-2 transition-all duration-2000 bg-gray-900 '>
                          
                    <div className={`w-64  mt-4 bg-gray-700 rounded-lg ${userName ? 'h-40' : 'courses'}`}>

                    <div className='neetDropdown'>
                        
                         <div  className="text-gray-300 hover:bg-gray-900 neet h-9 rounded-md mx-1 text-lg pl-5 card pt-1.5">Neet</div>
                            <div className='neetOptions'>

                                <div className='w-60 bg-gray-700 ml-2 py-2 rounded-lg'>
                                <div className='text-gray-300 hover:bg-gray-900  h-9 rounded-md mx-1 text-lg pl-5 pt-1.5'>Class 10</div>
                            <div className='text-gray-300 hover:bg-gray-900  h-9 rounded-md mx-1 text-lg pl-5 pt-1.5'>Class 11</div>
                            <Link to="/courses" className='text-gray-300 hover:bg-gray-900  h-9 rounded-md mx-1 text-lg pl-5 pt-1.5 block hover:cursor-pointer'>View all courses</Link>
                            
                                </div>
                            </div>
                       
                          </div>
                           

                          <div  className="text-gray-300 hover:bg-gray-900 neet h-9 rounded-md mx-1 text-lg pl-5 pt-1.5">Jee</div>
                          <div  className="text-gray-300 hover:bg-gray-900 neet pb-2 h-9 rounded-md mx-1 text-lg pl-5 pt-1.5">Class 6-10</div>
                          {userName && <Link to="/purchases" className='text-gray-300 hover:bg-gray-900  h-9 rounded-md mx-1 text-lg pl-5 pt-1.5 block hover:cursor-pointer'>View my courses</Link>
                            }
                    </div>
                        
                        
                        </div>
                </div>
            </div>

            
                
            <div>
                <div className=' relative group'>
                     <div className=" lg:font-bold border-b-4 rounded-sm border-transparent group-hover:border-blue-600 transition duration-2000">Scholarships</div>
                        <div className='absolute   hidden group-hover:block flex-col gap-2 w-64 transition-all duration-2000 bg-gray-900 '>
                    <div className='w-64 mt-4 pt-2.5 bg-gray-700 scholar rounded-lg'>
                          <div  className="text-gray-300 hover:bg-gray-900 neet h-9 rounded-md mx-1 text-lg pl-5 pt-1.5">ADSAT</div>
                          <Link to="/courses" className="text-gray-300 hover:bg-gray-900 neet pb-2 h-9 rounded-md mx-1 text-lg pl-5 pt-1.5 block hover:cursor-pointer">TALLENTEX</Link>
                    </div> 
                        </div>
                </div>
            </div>


            

            <div>
                <div className=' relative group'>
                     <div className=" lg:font-bold border-b-4 rounded-sm border-transparent group-hover:border-blue-600 transition duration-2000">Test Series</div>
                        <div className='absolute   hidden group-hover:block flex-col gap-2 w-64 h-40 py-2 transition-all duration-2000 bg-gray-900 '>
                          
                    <div className='w-64 test mt-4 bg-gray-700 rounded-lg'>

                    <div className='neetDropdown'>
                        
                         <div  className="text-gray-300 hover:bg-gray-900 neet h-9 rounded-md mx-1 text-lg pl-5 card pt-1.5">NEET</div>
                            <div className='neetOptions'>
                                <div className='w-60 bg-gray-700 ml-2 py-2 rounded-lg'>
                                <div className='text-gray-300 hover:bg-gray-900  h-9 rounded-md mx-1 text-lg pl-5 pt-1.5'>Class 11<sup>th</sup></div>
                            <div className='text-gray-300 hover:bg-gray-900  h-9 rounded-md mx-1 text-lg pl-5 pt-1.5'>Class 12<sup>th</sup></div>
                            <Link to="/courses" className='text-gray-300 hover:bg-gray-900  h-9 rounded-md mx-1 text-lg pl-5 pt-1.5 block hover:cursor-pointer'>Class 12<sup>th</sup> Plus</Link>
                                </div>
                            </div>
                       
                          </div>
                           


                          <div className='neetDropdown'>
                        
                        <div  className="text-gray-300 hover:bg-gray-900 neet h-9 rounded-md mx-1 text-lg pl-5 card pt-1.5">JEE(Main+Advanced</div>
                           <div className='neetOptions'>
                               <div className='w-60 bg-gray-700 ml-2 py-2 rounded-lg'>
                               <div className='text-gray-300 hover:bg-gray-900  h-9 rounded-md mx-1 text-lg pl-5 pt-1.5'>Class 11<sup>th</sup></div>
                           <div className='text-gray-300 hover:bg-gray-900  h-9 rounded-md mx-1 text-lg pl-5 pt-1.5'>Class 12<sup>th</sup></div>
                           <Link to="/courses" className='text-gray-300 hover:bg-gray-900  h-9 rounded-md mx-1 text-lg pl-5 pt-1.5 block hover:cursor-pointer'>Class 12<sup>th</sup> Plus</Link>
                               </div>
                           </div>
                      
                         </div>

                         <div className='neetDropdown'>
                        
                        <div  className="text-gray-300 hover:bg-gray-900 neet h-9 rounded-md mx-1 text-lg pl-5 card pt-1.5">JEE Main</div>
                           <div className='neetOptions'>
                               <div className='w-60 bg-gray-700 ml-2 py-2 rounded-lg'>
                               <div className='text-gray-300 hover:bg-gray-900  h-9 rounded-md mx-1 text-lg pl-5 pt-1.5'>Class 11<sup>th</sup></div>
                           <div className='text-gray-300 hover:bg-gray-900  h-9 rounded-md mx-1 text-lg pl-5 pt-1.5'>Class 12<sup>th</sup></div>
                           <Link to="/courses" className='text-gray-300 hover:bg-gray-900  h-9 rounded-md mx-1 text-lg pl-5 pt-1.5 block hover:cursor-pointer'>Class 12<sup>th</sup> Plus</Link>
                               </div>
                           </div>
                      
                         </div>
                    </div>
                        
                        
                        </div>
                </div>
            </div>

            <div>
                <div className=' relative group'>
                     <div className=" lg:font-bold border-b-4 rounded-sm border-transparent group-hover:border-blue-600 transition duration-2000">Results</div>
                        <div className='absolute   hidden group-hover:block flex-col gap-2 w-64  transition-all duration-2000 bg-gray-900 '>
                          
                    <div className='w-64 scholar mt-4 bg-gray-700 rounded-lg'>

                    <div className='neetDropdown'>
                        
                         <div  className="text-gray-300 hover:bg-gray-900 neet h-9 rounded-md mx-1 text-lg pl-5 card pt-1.5">Neet</div>
                            <div className='neetOptions'>

                                <div className='w-60 bg-gray-700 ml-2 py-2 rounded-lg'>
                                <div className='text-gray-300 hover:bg-gray-900  h-9 rounded-md mx-1 text-lg pl-5 pt-1.5'>2024</div>
                            <div className='text-gray-300 hover:bg-gray-900  h-9 rounded-md mx-1 text-lg pl-5 pt-1.5'>2023</div>
                            <Link to="/courses" className='text-gray-300 hover:bg-gray-900  h-9 rounded-md mx-1 text-lg pl-5 pt-1.5 block hover:cursor-pointer'>2022</Link>
                                </div>
                            </div>
                       
                          </div>
                           

                        <div className="neetDropdown">
                        <div  className="text-gray-300 hover:bg-gray-900 neet h-9 rounded-md mx-1 text-lg pl-5 -mt-3">Jee</div>
                        <div className='neetOptions'>

                                <div className='w-60 bg-gray-700 ml-2 py-2 rounded-lg'>
                                <div className='text-gray-300 hover:bg-gray-900  h-9 rounded-md mx-1 text-lg pl-5 pt-1.5'>2024</div>
                                <div className='text-gray-300 hover:bg-gray-900  h-9 rounded-md mx-1 text-lg pl-5 pt-1.5'>2023</div>
                                <Link to="/courses" className='text-gray-300 hover:bg-gray-900  h-9 rounded-md mx-1 text-lg pl-5 pt-1.5 block hover:cursor-pointer'>2022</Link>
                                </div>
                                </div>
                        </div>
                    </div>
                        
                        
                        </div>
                </div>
            </div>


            <div>
                <div className=' relative group'>
                     <div className=" lg:font-bold border-b-4 rounded-sm border-transparent group-hover:border-blue-600 transition duration-2000">About Us</div>
                        <div className='absolute   hidden group-hover:block flex-col gap-2 w-64 h-40 py-2 transition-all duration-2000 bg-gray-900 '>
                          
                    <div className='w-64 h-40 mt-4 bg-gray-700 rounded-lg'>

                    <div className='neetDropdown'>
                        
                         <div  className="text-gray-300 hover:bg-gray-900 neet h-9 rounded-md mx-1 text-lg pl-5 card pt-1.5">Blogs</div>
                  
                       
                          </div>
                           

                          <div  className="text-gray-300 hover:bg-gray-900 neet h-9 rounded-md mx-1 text-lg pl-5 pt-1.5">News</div>
                          <div  className="text-gray-300 hover:bg-gray-900 neet pb-2 h-9 rounded-md mx-1 text-lg pl-5 pt-1.5">Careers</div>
                          <Link to="/about" className="text-gray-300 hover:bg-gray-900 neet pb-2 h-9 rounded-md mx-1 text-lg pl-5 pt-1.5 block hover:cursor-pointer">About Us</Link>

                    </div>
                        
                        
                        </div>
                </div>
            </div>

        </div>

        <div className='flex gap-4 '>
            <div className='border-2 bg-blue-700 border-none hover:bg-blue-500 rounded-2xl px-4 py-1  '>
            <FontAwesomeIcon icon={faPhone} className=''/> talk to us
            </div>

          {userName ?(<div>welcome {userName}
            <button onClick={handleLogout} className='border-2 rounded-2xl px-3 py-1 border-blue-700 hover:bg-gray-700'>
            Logout                                                    
        </button>
          </div>) :
          (
            <button onClick={openLogin} className='border-2 rounded-3xl px-3.5 py-1.5 border-blue-700 hover:bg-gray-700 font-bold text-sm lg:hidden xl:block'>
            Login
        </button>
          )}

            {
                isLoginVisible && (
                    <div className="fixed right-0 top-0 w-1/3 h-full shadow-lg p-4 " style={{backgroundColor:"#212121"}}>
                        <Signin onClose = {closeLogin}/>
                    </div>
                )
            }
        </div>
        
    </div>
  )
}
