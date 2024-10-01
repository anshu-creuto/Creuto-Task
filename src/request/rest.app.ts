import Axios from 'axios';
import rest from '@feathersjs/rest-client';

import { CookieStorage } from 'cookie-storage';
import auth from '@feathersjs/authentication-client';
import feathers, { type Application } from '@feathersjs/feathers';

import services from './services.json';

const config = {
  authCookieName: process.env.NEXT_PUBLIC_COOKIE_NAME,
  paths: {
    cookieDomain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
    baseApi: process.env.NEXT_PUBLIC_API_URL,
  },
};

export const { authCookieName } = config;

export const cookieStorage = new CookieStorage({
  domain: process.env.NODE_ENV === 'production' ? config.paths.cookieDomain : undefined,
  path: '/',
});

export const apiPath = config.paths.baseApi;

const restClient = rest(apiPath);

const restApp: Application = feathers();

// declare module '@feathersjs/feathers/lib/declarations' {
// 	// eslint-disable-next-line @typescript-eslint/no-unused-vars
// 	interface Application<Services, Settings> {
// 		// eslint-disable-line
// 		io: any;
// 		rest?: any;
// 		// authentication: AuthenticationClient;
// 		authenticate: AuthenticationClient['authenticate'];
// 		reAuthenticate: AuthenticationClient['reAuthenticate'];
// 		logout: AuthenticationClient['logout'];
// 	}
// }

restApp.configure(restClient.axios(Axios));

restApp.configure(
  auth({
    path: services.authentication,
    // cookie: process.env.NEXT_COOKIE_NAME,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    cookie: authCookieName,
    // storageKey: process.env.NEXT_COOKIE_NAME,
    storageKey: authCookieName,

    storage: cookieStorage,
    // domain: process.env.NODE_ENV === 'production' ? config.paths.cookieDomain : undefined,
  })
);

// Function to get the authentication token from the cookie storage
const getTokenFromCookie = () => {
  const token = cookieStorage.getItem(authCookieName); // Get token from cookie storage
  return token ? `Bearer ${token}` : ''; // Return token with 'Bearer' prefix
};

// Configure Axios to include token in headers for all services
restApp.hooks({
  before: {
    all: [
      (context) => {
        // Add token to headers
        context.params.headers = {
          ...context.params.headers,
          Authorization: getTokenFromCookie(),
        };
        return context;
      },
    ],
  },
});

export default restApp;
