import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  nameShop: string = 'AVITEM IMPORTACIONES';
  currentYear: number = new Date().getFullYear();
}
