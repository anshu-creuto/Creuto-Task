import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';
import AddTaskButton from 'src/app/dashboard/components/task/AddTaskButton';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/${name}.svg`} />
);

const ICONS = {
  job: icon('ic-job'),
  blog: icon('ic-blog'),
  chat: icon('ic-chat'),
  mail: icon('ic-mail'),
  user: icon('ic-user'),
  file: icon('ic-file'),
  lock: icon('ic-lock'),
  tour: icon('ic-tour'),
  order: icon('ic-order'),
  label: icon('ic-label'),
  blank: icon('ic-blank'),
  kanban: icon('ic-kanban'),
  folder: icon('ic-folder'),
  course: icon('ic-course'),
  banking: icon('ic-banking'),
  booking: icon('ic-booking'),
  invoice: icon('ic-invoice'),
  product: icon('ic-product'),
  calendar: icon('ic-calendar'),
  disabled: icon('ic-disabled'),
  external: icon('ic-external'),
  menuItem: icon('ic-menu-item'),
  ecommerce: icon('ic-ecommerce'),
  analytics: icon('ic-analytics'),
  dashboard: icon('ic-dashboard'),
  parameter: icon('ic-parameter'),
};

// ----------------------------------------------------------------------

// Navigation Data
export const navData = [
  {
    items: [
      { custom: true, path: '', render: <AddTaskButton /> },
      { title: 'Search', path: '', icon: ICONS.order },
      { title: 'Inbox', path: '/dashboard/inbox', icon: ICONS.chat },
      { title: 'Today', path: '/dashboard/today', icon: ICONS.external },
      { title: 'Upcoming', path: '/dashboard/upcoming', icon: ICONS.banking },
      { title: 'Filters & Labels', path: '/dashboard/filters-labels', icon: ICONS.label },
    ],
  },
  {
    subheader: 'My Projects',
    items: [
      { title: '#Education', path: '/project/education', icon: ICONS.course },
      { title: '#Home', path: '/project/home', icon: ICONS.job },
    ],
  },
];
