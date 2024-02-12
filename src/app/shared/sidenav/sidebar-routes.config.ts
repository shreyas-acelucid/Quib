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
    label: 'Setting',
    icon: 'pi pi-cog',
    //routerLink: ['/Movies/all-movies'],
    items: [
      {
        label: 'Recommended Movie',
        // routerLink: ['/Movies/all-movies'],
      },
      {
        label: 'Avatar',
        // routerLink: ['/Movies/active-movies'],
      },
      {
        label: 'Tooltip',
        // routerLink: ['/Movies/admin-screenshots'],
      },
      {
        label: 'TOS',
        // routerLink: [''],
      },
    ],
  },
];
