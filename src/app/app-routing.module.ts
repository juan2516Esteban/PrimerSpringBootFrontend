import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HijoComponent } from "./componentes/hijo/hijo.component";
import { PrimeraIteraccionComponent } from "./componentes/primera-iteraccion/primera-iteraccion.component";
import { PadreComponent } from "./componentes/padre/padre.component";
import { UserComponent } from "./componentes/user/user.component";
import { EditorialComponent } from "./componentes/editorial/editorial.component";
import { EpisodiosComponent } from "./componentes/episodios/episodios.component";
import { LogginComponent } from "./componentes/loggin/loggin.component";
import { InfoRickComponent } from "./componentes/info-rick/info-rick.component";

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
    path: "editoriales",
    component: EditorialComponent
  },
  {
    path: "rick",
    component: EpisodiosComponent
  },
  {
    path: "loggin",
    component: LogginComponent
  },
  {
    path: "infoRick/:id",
    component: InfoRickComponent
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
