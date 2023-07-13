import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PadreComponent } from "./componentes/padre/padre.component";
import { HijoComponent } from "./componentes/hijo/hijo.component";
import { PrimeraIteraccionComponent } from "./componentes/primera-iteraccion/primera-iteraccion.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { UserComponent } from "./componentes/user/user.component";
import { EditorialComponent } from "./componentes/editorial/editorial.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { EpisodiosComponent } from "./componentes/episodios/episodios.component";
import { LogginComponent } from "./componentes/loggin/loggin.component";
import { CardModule } from "primeng/card";

@NgModule({
  declarations: [
    EpisodiosComponent,
    AppComponent,
    PadreComponent,
    HijoComponent,
    PrimeraIteraccionComponent,
    UserComponent,
    EditorialComponent,
    LogginComponent
  ],
  imports: [
    BreadcrumbModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
