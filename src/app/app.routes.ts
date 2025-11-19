import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'cabanas',
    loadComponent: () => import('./pages/cabanas/cabanas.page').then( m => m.CabanasPage)
  },
  {
    path: 'reservas',
    loadComponent: () => import('./pages/reservas/reservas.page').then( m => m.ReservasPage)
  },
  {
    path: 'usuarios',
    loadComponent: () => import('./pages/usuarios/usuarios.page').then( m => m.UsuariosPage)
  },
];
