import { Component } from '@angular/core';
import { Footer } from '../../shared/footer/footer';
import { Header } from '../../shared/header/header';

@Component({
  imports: [Header, Footer],
  selector: 'app-marcas',
  styleUrl: './marcas.css',
  templateUrl: './marcas.html',
})
export default class Marcas {}
