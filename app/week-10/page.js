"use client";

import React from 'react';
import { useUserAuth } from './_utils/auth-context'; // Ensure this path is correct
import Link from 'next/link';

function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="container mx-auto my-10">
      {!user ? (
        <button onClick={gitHubSignIn} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors">
          Login with GitHub
        </button>
      ) : (
        <>
          <p className="mb-4">
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={firebaseSignOut} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors mr-4">
            Logout
          </button>
          <Link href="week-10/shopping-list">
            <div className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition-colors">
              Go to Shopping List
            </div>
          </Link>
        </>
      )}
    </div>
  );
}

export default LandingPage;
