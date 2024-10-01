'use client';


import { ThemeProvider } from 'src/theme/theme-provider';

import { UserProvider } from '../contexts/user-context';

import { ConfirmProvider } from 'material-ui-confirm';

import { SnackbarProvider } from 'notistack';

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => (
  <ConfirmProvider >
    <ThemeProvider>
      <UserProvider>
        <SnackbarProvider>{children}</SnackbarProvider>
      </UserProvider>
    </ThemeProvider>
  </ConfirmProvider>
);

export default Providers;
