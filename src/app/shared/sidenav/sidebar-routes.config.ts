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
    //     {
    //         label: 'All Movies',
    //         routerLink: ['/Movies/all-movies']
    //     },
    //     {
    //         label: 'Active Movies',
    //         routerLink: ['/Movies/active-movies']
    //     },
    // ]
  },
  {
    label: 'Quibs',
    icon: 'pi pi-database',
    routerLink: ['/Quib/recent-quib'],
    // items: [
    //     {
    //         label: 'Quib List',
    //         routerLink: ['/Quib/recent-quib']
    //     },
    // ]
  },
];
