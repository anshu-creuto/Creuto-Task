'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useUser } from '../hooks/use-user';
// ----------------------------------------------------------------------

export default function HomePage() {
  const router = useRouter();
  const { user, error, isLoading, setState } = useUser();

  console.log('::: user', user);

  useEffect(() => {
    if (user) router.replace('/dashboard');
    else router.replace('/login');
  }, [router, user]);

  return <></>;
}
