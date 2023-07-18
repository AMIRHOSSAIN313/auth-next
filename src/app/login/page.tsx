'use client'

import Link from 'next/link';
import React, { useState } from 'react'

export default function LoginPage() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const onLogin = async () => {

    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>{loading ? 'loading...' : 'login'}</h1>
        
        <label htmlFor="email">Email: </label>
        <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" type="email" id='email' value={user.email} onChange={(e) => setUser({...user, email: e.target.value })} />
        <label htmlFor="password">Password: </label>
        <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" type="password" id='password' value={user.password} onChange={(e) => setUser({...user, password: e.target.value })} />
        <button
            onClick={onLogin}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">login</button>
            <Link href='/signup'>signup page</Link>
    </div>
  )
}
