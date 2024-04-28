import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    title: 'Home',
    loadComponent: () => import('./pages/home/home.component'),
  },
  // {
  //   path: 'contact',
  //   title: 'Contact',
  //   loadComponent: () => import('./pages/contact/contact.component'),
  // },
  {
    path: '**',
    title: 'Error',
    loadComponent: () => import('./pages/error/error.component'),
  },
];
