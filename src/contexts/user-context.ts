'use client';

import * as React from 'react';
import { SplashScreen } from 'src/components/loading-screen'; // Assuming SplashScreen is used somewhere
import restApp, { cookieStorage, authCookieName } from '../request/rest.app';
import type { User } from '../types/user';

// Defining the UserContext value
export interface UserContextValue {
  user: User | null;
  error: string | null;
  isLoading: boolean;
  checkSession?: () => Promise<void>;
  setState: React.Dispatch<React.SetStateAction<{ user: User | null; error: string | null; isLoading: boolean }>>;
}

// Creating the UserContext with an undefined default value
export const UserContext = React.createContext<UserContextValue | undefined>(undefined);

// Defining props for the UserProvider component
export interface UserProviderProps {
  children: React.ReactNode;
}

// The UserProvider function component
export function UserProvider({ children }: UserProviderProps): React.JSX.Element {
  const [state, setState] = React.useState<{ user: User | null; error: string | null; isLoading: boolean }>({
    user: null,
    error: null,
    isLoading: true,
  });

  // The checkSession function to validate the user's session
  const checkSession = React.useCallback(async (): Promise<void> => {
    try {
      // Retrieving the access token from cookies
      const access_token = cookieStorage.getItem(authCookieName);

      if (!access_token) {
        // If no token is found, set user to null and stop loading
        setState((prev) => ({ ...prev, user: null, error: null, isLoading: false }));
        return;
      }

      // Authenticating using the JWT strategy
      const data = await restApp.authenticate(
        {
          strategy: 'jwt',
          accessToken: access_token,
        }
        // Optional query params can be added here
      );

      // Updating state with the authenticated user data
      setState((prev) => ({
        ...prev,
        user: data.user ?? null,
        error: null,
        isLoading: false,
      }));
    } catch (err) {
      // Handling errors
      console.error(err);
      setState((prev) => ({ ...prev, user: null, error: 'Something went wrong', isLoading: false }));
    }
  }, []);

  // Running the checkSession on component mount
  React.useEffect(() => {
    checkSession().catch((err) => {
      console.error(err);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Expected
  }, []);

  // Displaying a loading screen while the session is being checked
  if (state.isLoading) return <div>Loading</div>;

  // Rendering the UserContext provider
  return (
    <UserContext.Provider value={{ ...state, checkSession, setState }}>
      {children}
    </UserContext.Provider>
  );
}

// Exporting the UserConsumer for use in other components
export const UserConsumer = UserContext.Consumer;
