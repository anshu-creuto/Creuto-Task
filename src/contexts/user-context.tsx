'use client';

import * as React from 'react';

import { SplashScreen } from 'src/components/loading-screen';

import restApp, { cookieStorage, authCookieName } from '../request/rest.app';

import type { User } from '../sections/types/User';

export interface UserContextValue {
  user: User | null;
  error: string | null;
  isLoading: boolean;
  checkSession?: () => Promise<void>;
  setState: React.Dispatch<
    React.SetStateAction<{ user: User | null; error: string | null; isLoading: boolean }>
  >;
}

export const UserContext = React.createContext<UserContextValue | undefined>(undefined);

export interface UserProviderProps {
  children: React.ReactNode;
}

export function UserProvider({ children }: UserProviderProps): React.JSX.Element {
  const [state, setState] = React.useState<{
    user: User | null;
    error: string | null;
    isLoading: boolean;
  }>({
    user: null,
    error: null,
    isLoading: true,
  });

  const checkSession = React.useCallback(async (): Promise<void> => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
      const access_token = cookieStorage.getItem(authCookieName);

      if (!access_token) {
        setState((prev) => ({ ...prev, user: null, error: null, isLoading: false }));
        return;
      }

      const data = await restApp.authenticate(
        {
          strategy: 'jwt',
          accessToken: access_token,
        },
        {
          // query: {
          //   $populate: 'organization',
          // }
        }
      );

      // const { data, error } = await authClient.getUser();
      //
      // if (error) {
      //   logger.error(error);
      //   setState((prev) => ({ ...prev, user: null, error: 'Something went wrong', isLoading: false }));
      //   return;
      // }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setState((prev) => ({
        ...prev,
        user: data.user ?? null,
        error: null,
        isLoading: false,
      }));
    } catch (err) {
      console.error(err);
      setState((prev) => ({
        ...prev,
        user: null,
        error: 'Something went wrong',
        isLoading: false,
      }));
    }
  }, []);

  React.useEffect(() => {
    checkSession().catch((err) => {
      console.error(err);
      // noop
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Expected
  }, []);

  if (state.isLoading) return <SplashScreen />;

  return (
    <UserContext.Provider value={{ ...state, checkSession, setState }}>
      {children}
    </UserContext.Provider>
  );
}

export const UserConsumer = UserContext.Consumer;
