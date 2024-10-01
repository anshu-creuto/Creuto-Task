'use client';

import { ConfirmProvider as MUIConfirmProvider } from 'material-ui-confirm';

const ConfirmProvider = ({ children }: { children: React.ReactNode }) => (
  <MUIConfirmProvider
    defaultOptions={{
      confirmationButtonProps: { autoFocus: true },
      dialogProps: {
        maxWidth: 'sm',
      },
    }}
  >
    {children}
  </MUIConfirmProvider>
);

export default ConfirmProvider;
