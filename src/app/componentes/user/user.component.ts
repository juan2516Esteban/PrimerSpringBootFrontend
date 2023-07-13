import { group } from "@angular/animations";
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RickAndMortyService } from "src/app/service/rick-and-morty.service";
import { LibroDto } from "src/assets/Models/LibroDto";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent {
  constructor(private service: RickAndMortyService) {
    this.service.obtenerPersonajes().subscribe((respuesta) => {
      console.log(respuesta);
    });
  }

  isLogged: boolean = false;
  nivel: number = 0;
  public libroDtos: LibroDto = new LibroDto();

  public formLibro = new FormGroup({
    idLibro: new FormControl(undefined, Validators.required),
    autor: new FormControl("", [Validators.required, Validators.minLength(3)]),
    titulo: new FormControl("", [Validators.required, Validators.minLength(3)])
  });

  public enviarFormulario() {
    let libroDtos = {
      idLibro: this.formLibro.get("idLibro")?.value,
      autor: this.formLibro.get("autor")?.value,
      titulo: this.formLibro.get("titulo")!.value
    };

    console.log(libroDtos);
  }
}
