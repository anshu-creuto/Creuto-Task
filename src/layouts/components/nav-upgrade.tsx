import type { StackProps } from '@mui/material/Stack';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export function NavUpgrade({ sx, ...other }: StackProps) {
  return (
    <Stack sx={{ px: 2, py: 5,  ...sx }} {...other}>
      <Typography> +  Add team members</Typography>
    </Stack>
  );
}
