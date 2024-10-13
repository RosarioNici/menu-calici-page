import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Devi importare il RouterModule qui
import { RouterModule } from '@angular/router';

// Importa il tuo modulo di routing (che creeremo tra poco)
import { AppRoutingModule } from './app-routing.module';

// Dichiarazione dei tuoi componenti (solo se non sono standalone)
import { RistoranteComponent } from './components/ristorante/ristorante.component';
import { PizzeriaComponent } from './components/pizzeria/pizzeria.component';
import { DrinkComponent } from './components/drink/drink.component';
import { ViniComponent } from './components/vini/vini.component';
import { AperitiviComponent } from './components/aperitivi/aperitivi.component';

@NgModule({
  declarations: [     // Qui dichiari tutti i tuoi componenti (se non sono standalone)
    AppComponent,
    RistoranteComponent,
    PizzeriaComponent,
    DrinkComponent,
    ViniComponent,
    AperitiviComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,      // Questo è cruciale per abilitare il routing
    AppRoutingModule   // Importiamo il modulo di routing che contiene le rotte
  ],
  providers: [],
  bootstrap: [AppComponent]   // Il componente principale che viene avviato
})
export class AppModule { }

