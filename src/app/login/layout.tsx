'use client';

// import { CookieStorage } from 'cookie-storage';

// import { useCallback, useEffect, useState } from 'react';

// import restApp, { authCookieName } from 'src/request/rest.app';

import { AuthCenteredLayout } from 'src/layouts/auth-centered';

// import { GuestGuard } from 'src/auth/guard';

// import { SplashScreen } from 'src/components/loading-screen';
// import { useRouter } from 'next/navigation';

// import {restApp, config,  authCookieName } from 'src/request/rest.app';
// import config from 'src/request/rest.app';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  // const [loading, setLoading] = useState<boolean>(true);

  // const cookieStorage = new CookieStorage();
  // const router = useRouter();
  // const validateToken = useCallback(async () => {
  //   try {
  //     const access_token = cookieStorage.getItem(authCookieName);
  //     console.log('access_token', access_token, authCookieName);
  //     if (!access_token) {
  //       setLoading(false);
  //       return;
  //     }
  //     const res = await restApp.authenticate({
  //       strategy: 'jwt',
  //       accessToken: access_token,
  //     });
  //     if (res?.user) {
  //       // location.href = config.paths.console;
  //       router.push('/');
  //     } else {
  //       setLoading(false);
  //     }
  //   } catch (err) {
  //     setLoading(false);
  //     // setLoading(false);
  //   }
  // }, []);

  // useEffect(() => {
  //   validateToken();
  // }, []);

  // if (loading) {
  //   return <SplashScreen/>;
  // }

  return (
    // <GuestGuard>
    <AuthCenteredLayout>{children}</AuthCenteredLayout>
    // </GuestGuard>
  );
}
