import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./home/home') },
    { path: 'nosotros', loadComponent: () => import('./pages/nosotros/nosotros') },
    { path: 'categorias', loadComponent: () => import('./pages/categorias/categorias') },
    { path: 'productos', loadComponent: () => import('./pages/productos/productos') },
    { path: 'marcas', loadComponent: () => import('./pages/marcas/marcas') },
    /*
    { path: 'marcas', component: Brands },
    { path: 'nosotros', component: About },
    { path: 'contacto', component: Contact },
    { path: 'cotizacion', component: Quote },
    { path: '**', redirectTo: '' }*/
];
