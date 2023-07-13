import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EditorialService } from "src/app/service/editorial.service";
import { Observable } from "rxjs";
import { Editorial } from "src/app/Models/Editorial";

@Component({
  selector: "app-editorial",
  templateUrl: "./editorial.component.html",
  styleUrls: ["./editorial.component.css"]
})
export class EditorialComponent {
  constructor(private service: EditorialService) {}

  public iEdtitorial!: any;
  public editorialObtenido?: any;

  public formEditorial = new FormGroup({
    nombre: new FormControl("", [Validators.required, Validators.minLength(3)]),
    direccion: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  public enviarEditorial() {
    let editorial: Editorial = {
      nombre: this.formEditorial.get("nombre")?.value || "",
      direccion: this.formEditorial.get("direccion")?.value || ""
    };

    this.service.enviareditorial(editorial).subscribe((respuesta) => {
      this.iEdtitorial = respuesta;
    });
  }

  public obtenerEditorial() {
    this.service.obtenerEditorial(1).subscribe(
      (respuesta) => {
        console.log(respuesta);
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}
