import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetalleDosComponent } from './components/detalleDos/detalleDos.component';
import { DetalleTresComponent } from './components/detalleTres/detalleTres.component';
import { DetalleUnoComponent } from './components/detalleUno/detalleUno.component';
import { NoEncontradaComponent } from './components/no-encontrada/no-encontrada.component';

const routes: Routes = [
  {path: "inicio", component: InicioComponent},
  {path: "detalleUno", component: DetalleUnoComponent},
  {path: "detalleDos", component: DetalleDosComponent},
  {path: "detalleTres", component: DetalleTresComponent},
  {path: "", redirectTo: "inicio", pathMatch: "full"},
  {path: "**", component: NoEncontradaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
