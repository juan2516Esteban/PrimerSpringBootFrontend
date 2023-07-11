import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HijoComponent } from "./componentes/hijo/hijo.component";
import { PrimeraIteraccionComponent } from "./componentes/primera-iteraccion/primera-iteraccion.component";
import { PadreComponent } from "./componentes/padre/padre.component";
import { UserComponent } from "./componentes/user/user.component";

const routes: Routes = [
  {
    path: "hijo",
    component: HijoComponent
  },
  {
    path: "primeraVista",
    component: PrimeraIteraccionComponent
  },
  {
    path: "padre",
    component: PadreComponent
  },
  {
    path: "user",
    component: UserComponent
  },
  {
    path: "**",
    redirectTo: "primeraVista"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
