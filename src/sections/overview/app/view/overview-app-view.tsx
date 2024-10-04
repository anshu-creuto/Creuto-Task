'use client';

import { Typography } from '@mui/material';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import { useTheme } from '@mui/material/styles';
// import Grid from '@mui/material/Unstable_Grid2';

// // import { DashboardContent, DashboardLayout } from 'src/layouts/dashboard';

// import { SeoIllustration } from 'src/assets/illustrations';
// import { _appAuthors, _appRelated, _appFeatured, _appInvoices, _appInstalled } from 'src/_mock';

// import { svgColorClasses } from 'src/components/svg-color';

// import { useMockedUser } from 'src/auth/hooks';

// import { AppWelcome } from '../app-welcome';
// import { AppFeatured } from '../app-featured';
// import { AppNewInvoice } from '../app-new-invoice';
// import { AppTopAuthors } from '../app-top-authors';
// import { AppTopRelated } from '../app-top-related';
// import { AppAreaInstalled } from '../app-area-installed';
// import { AppWidgetSummary } from '../app-widget-summary';
// import { AppCurrentDownload } from '../app-current-download';
// import { AppTopInstalledCountries } from '../app-top-installed-countries';
import { DashboardLayout } from 'src/layouts/dashboard';

// ----------------------------------------------------------------------

export function OverviewAppView() {
  // const { user } = useMockedUser();

  // const theme = useTheme();

  return (
    <DashboardLayout>
      <Typography marginTop={5}> KANBAN </Typography>
    </DashboardLayout>
  );
}
