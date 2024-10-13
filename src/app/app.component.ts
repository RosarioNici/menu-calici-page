import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/ristorante">Ristorante</a>
      <a routerLink="/pizzeria">Pizzeria</a>
      <a routerLink="/drink">Drink</a>
      <a routerLink="/vini">Vini</a>
      <a routerLink="/aperitivi">Aperitivi</a>
    </nav>
    <router-outlet></router-outlet>  <!-- Assicurati che ci sia questo -->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu-calici-page';
}
