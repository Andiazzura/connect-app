'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    setMessage('✅ Login berhasil sebagai Admin!');
    router.push('/admin/users'); // arahkan ke halaman users
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="text-3xl font-bold text-black">Connect With Us</h1>

        {message && (
          <div className="text-green-600 font-medium text-sm">{message}</div>
        )}

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-white text-black"
            value="Email"
            disabled
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-white text-black"
            value="Password"
            disabled
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800"
        >
          Sign In
        </button>
      </div>
    </main>
  );
}
