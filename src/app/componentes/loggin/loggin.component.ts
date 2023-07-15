import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Usuario } from "src/app/Models/usuario";

@Component({
  selector: "app-loggin",
  templateUrl: "./loggin.component.html",
  styleUrls: ["./loggin.component.css"]
})
export class LogginComponent {
  public Iusuario!: any;

  public fromUsuario = new FormGroup({
    correoElectronico: new FormControl("", [
      Validators.email,
      Validators.required
    ]),
    contraseña: new FormControl("", [Validators.required])
  });

  enviarDatos() {
    let usuario: Usuario = {
      correoElectronico: this.fromUsuario.get("correoElectronico")?.value || "",
      contraseña: this.fromUsuario.get("contraseña")?.value || ""
    };
    console.log((this.Iusuario = usuario));
  }
}
