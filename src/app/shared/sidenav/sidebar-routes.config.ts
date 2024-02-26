export const SideNaveMenueRoute = [
  {
    label: 'User',
    icon: 'pi pi-fw pi-user',
    routerLink: ['/customer/quib-user'],
  },
  {
    label: 'Movies',
    icon: 'pi pi-inbox',
    routerLink: ['/Movies/all-movies'],
   },
  {
    label: 'Quibs',
    icon: 'pi pi-database',
    routerLink: ['/Quib/recent-quib'],
  },
  {
    label: 'Settings',
    icon: 'pi pi-cog',
    items: [
      {
        label: 'Recommended Movie',
        routerLink: ['/setting/recommended-movie'],
      },
      {
        label: 'Avatar',
        routerLink: ['/setting/avatar'],
      },
      {
        label: 'Tooltip',
        routerLink: ['/setting/tooltips'],
      },
      {
        label: 'TOS',
        routerLink: ['/setting/tos'],
      },
    ],
  },
];
