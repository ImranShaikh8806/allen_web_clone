import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({link,text,style}) {
  return (
    <Link to={link} className={`${style} border-2 rounded-3xl px-5 py-3 border-blue-700 hover:bg-gray-700 font-bold text-sm flex justify-center items-center`} >
        {text}
        </Link>
  )
}
