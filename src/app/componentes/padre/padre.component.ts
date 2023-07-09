import { Component, OnInit } from "@angular/core";
import { LibroDto } from "src/assets/Models/LibroDto";

@Component({
  selector: "app-padre",
  templateUrl: "./padre.component.html",
  styleUrls: ["./padre.component.css"]
})
export class PadreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.listaObjetos = [
      { idLibro: 1, autor: "Juan Esteban Londoño", titulo: "El Trabajador" },
      { autor: "Nora Elena Londoño", titulo: "La del desafio" }
    ];

    console.log(this.listaObjetos);
  }

  public mensajeHijo: String = "Soy tu padre";

  public mensajeArray: Array<any> = [
    1,
    2,
    3,
    4,
    "Juan Esteban Salazar",
    1088825376,
    "Entro a las 4 a trabajar"
  ];

  public listaObjetos: Array<LibroDto> = [];
}
