import React from 'react'

function Button(prop) {
  return (
    <div className='bg-gray-600 text-white  py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500 text-center'>
        {prop.children}
    </div>
  )
}

export default Button