import {
  calendarOutline,
  calendarSharp,
  cogOutline,
  cogSharp,
  documentOutline,
  documentSharp,
  linkOutline,
  linkSharp,
  listOutline,
  listSharp,
  speedometerOutline,
  speedometerSharp,
} from 'ionicons/icons';

export const routes = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    iosIcon: speedometerOutline,
    mdIcon: speedometerSharp,
  },
  {
    title: 'Events',
    url: '/events',
    iosIcon: calendarOutline,
    mdIcon: calendarSharp,
  },
  {
    title: 'Resources',
    url: '/resources',
    iosIcon: linkOutline,
    mdIcon: linkSharp,
  },
  {
    title: 'Campaigns',
    url: '/campaigns',
    iosIcon: listOutline,
    mdIcon: listSharp,
  },
  {
    title: 'Documents',
    url: '/documents',
    iosIcon: documentOutline,
    mdIcon: documentSharp,
  },
  {
    title: 'Settings',
    url: '/settings',
    iosIcon: cogOutline,
    mdIcon: cogSharp,
  },
];
