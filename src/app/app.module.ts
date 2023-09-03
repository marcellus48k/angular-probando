import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { NoEncontradaComponent } from './components/no-encontrada/no-encontrada.component';
import { DetalleUnoComponent } from './components/detalleUno/detalleUno.component';
import { DetalleDosComponent } from './components/detalleDos/detalleDos.component';
import { DetalleTresComponent } from './components/detalleTres/detalleTres.component';
import { InicioComponent } from './components/inicio/inicio.component';


@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    NoEncontradaComponent,
    InicioComponent,
    DetalleUnoComponent,
    DetalleDosComponent,
    DetalleTresComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
