import { Component } from '@angular/core';
import { Footer } from '../shared/footer/footer';
import { Header } from '../shared/header/header';

@Component({
  imports: [Header, Footer],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export default class Home {}
