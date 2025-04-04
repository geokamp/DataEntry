import React from 'react'

export default function Button({onClick}) {
  return (
    <div className='flex justify-center mt-5'>
      <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        + Add Employee
      </button>
    </div>
  );
}
