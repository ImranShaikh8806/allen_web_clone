import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className='footer lg:flex flex-col lg:flex-row justify-center space-x-16 mt-36'>

        <div className='first'>
            <h1>About</h1>
            <ul className='list overflow-hidden whitespace-normal text-ellipsis text-slate-50 font-thin'>
              <li>About us</li>
              <li>Blog</li>
              <li>News</li>
              <li>MyExam EduBlogs</li>
              <li>Privacy policy</li>
              <li>Public notice</li>
              <li>Careers</li>
            </ul>
        </div>

        <div className='second'>
            <h1>Help & Support</h1>
            <ul className='list overflow-hidden whitespace-normal text-ellipsis text-slate-50 font-thin'>
              <li>Refund policy</li>
              <li>Transfer policy</li>
              <li>Terms & Conditins</li>
              <li>Contact us</li>
            
            </ul>
        </div>

        <div className='third'>
            <h1>Popular goals</h1>
            <ul className='list overflow-hidden whitespace-normal text-ellipsis text-slate-50 font-thin'>
              <li>NEET UG</li>
              <li>JEE Advanced</li>
              <li>6<sup>th</sup> &nbsp; to &nbsp; 10<sup>th</sup></li>
             
            </ul>
        </div>

        <div className='fourth'>
            <h1>Courses</h1>
            <ul className='list overflow-hidden whitespace-normal text-ellipsis text-slate-50 font-thin'>
              <li>Ultimate Program</li>
              <li>Distance learning</li>
              <li>Online Test Series</li>
            </ul>
        </div>

        <div className='fifth'>
            <h1>Centers</h1>
            <ul className='list overflow-hidden whitespace-normal text-ellipsis text-slate-50 font-thin'>
              <li>Kota</li>
              <li>Bangalore</li>
              <li>Indore</li>
              <li>Delhi</li>
              <li>More centers</li>
            </ul>
        </div>

        <div className='sixth overflow-hidden whitespace-normal text-ellipsis text-slate-50 font-thin'>
            <h1>Exam informatin</h1>
            <ul className='list'>
              <li>JEE Main</li>
              <li>JEE Advanced</li>
              <li>NEET UG</li>
              <li>Class 10</li>
              <li>Class 12</li>
              <li>Olympiad Exam</li>
              <li>NEET Online Test Series</li>
              <li>JEE Online Test Series</li>
              <li>JEE Main Online Test Series</li>
            </ul>
        </div>
      </div>
    </div>
  )
}
