import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { ProductoDetalle } from './producto-detalle/producto-detalle';

@Component({
  imports: [Header, Footer, ProductoDetalle],
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export default class Productos {}
