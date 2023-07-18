import React from 'react'

export default function UserProfile({params}: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <h1>user profile</h1>
    <hr />
    <p className='text-4xl'>user page: 
        <span className='p-2 ml-2 rounded bg-green-600'>{params.id}</span>
        </p>
    </div>
  )
}
