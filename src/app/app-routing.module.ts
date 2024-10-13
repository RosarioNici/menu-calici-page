import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa i tuoi componenti
import { RistoranteComponent } from './components/ristorante/ristorante.component';
import { PizzeriaComponent } from './components/pizzeria/pizzeria.component';
import { DrinkComponent } from './components/drink/drink.component';
import { ViniComponent } from './components/vini/vini.component';
import { AperitiviComponent } from './components/aperitivi/aperitivi.component';

const routes: Routes = [
  { path: 'ristorante', component: RistoranteComponent },
  { path: 'pizzeria', component: PizzeriaComponent },
  { path: 'drink', component: DrinkComponent },
  { path: 'vini', component: ViniComponent },
  { path: 'aperitivi', component: AperitiviComponent },
  { path: '', redirectTo: '/ristorante', pathMatch: 'full' },  // Rotta di default
  { path: '**', redirectTo: '/ristorante' }  // Rotta di fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importa RouterModule con le rotte
  exports: [RouterModule]  // Esporta RouterModule per utilizzarlo in altri moduli
})
export class AppRoutingModule { }
