import { Routes } from '@angular/router';
import Error404 from './pages/error404/error404';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./home/home') },
    { path: 'nosotros', loadComponent: () => import('./pages/nosotros/nosotros') },
    { path: 'categorias', loadComponent: () => import('./pages/categorias/categorias') },
    { path: 'productos', loadComponent: () => import('./pages/productos/productos') },
    { path: 'marcas', loadComponent: () => import('./pages/marcas/marcas') },
    { path: '404', component: Error404 },
    { path: '**', redirectTo: '404', pathMatch: 'full' },
    /*
    { path: 'marcas', component: Brands },
    { path: 'nosotros', component: About },
    { path: 'contacto', component: Contact },
    { path: 'cotizacion', component: Quote },
    { path: '**', redirectTo: '' }*/
];
