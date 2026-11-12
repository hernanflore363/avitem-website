import { Component } from '@angular/core';
import { Footer } from '../../shared/footer/footer';
import { Header } from '../../shared/header/header';
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [Header, Footer, NgOptimizedImage],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export default class Home {}
