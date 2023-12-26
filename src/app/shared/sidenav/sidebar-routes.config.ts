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
    // items: [
    //   {
    //     label: 'All Movies',
    //     routerLink: ['/Movies/all-movies'],
    //   },
    //   {
    //     label: 'Active Movies',
    //     routerLink: ['/Movies/active-movies'],
    //   },
    //   {
    //     label: 'Admin Screenshots',
    //     routerLink: ['/Movies/admin-screenshots'],
    //   },
    // ],
  },
  {
    label: 'Quibs',
    icon: 'pi pi-database',
    routerLink: ['/Quib/recent-quib'],
  },
  // {
  //   label: 'Admin Screenshots',
  //   icon: 'pi pi-fw pi-user',
  //   routerLink: ['/admin-screenshots'],
  // },
];
