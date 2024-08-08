// pages/protected.js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function ProtectedPage() {
  const [accessToken, setAccessToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      router.push('/auth/signin');
    } else {
      setAccessToken(token);
    }
  }, [router]);

  if (!accessToken) {
    return <div>Loading...</div>;
  }

  return <div>token: {accessToken}</div>;
}
