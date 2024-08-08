// pages/auth/signin.js

import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function SignIn() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.accessToken) {
      localStorage.setItem('accessToken', session.accessToken);
    }
  }, [session]);

  const handleLogout = () => {
    // Clear the access token from local storage
    localStorage.removeItem('accessToken');
    // Sign out using next-auth
    signOut();
  };

  return (
    <div>
      {!session ? (
        <>
          <h1>You are not signed in</h1>
          <button onClick={() => signIn('discord')}>Link to Discord</button>
        </>
      ) : (
        <>
          <h1>Signed in as {session.user.name}</h1>
          <p>Access Token stored in local storage</p>
          <button onClick={handleLogout}>Sign out</button>
        </>
      )}
    </div>
  );
}
