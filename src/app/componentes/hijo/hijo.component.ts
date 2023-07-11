import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { LibroDto } from "src/assets/Models/LibroDto";

@Component({
  selector: "app-hijo",
  templateUrl: "./hijo.component.html",
  styleUrls: ["./hijo.component.css"]
})
export class HijoComponent implements OnInit {
  constructor() {}

  @Input() public recibidoArray: Array<any> = ["estoy vacio"];
  @Input() public recibido!: String;
  @Input() public recibidoObjeto!: Array<LibroDto>;

  @Output() enviarPapá = new EventEmitter();

  enviar() {
    this.enviarPapá.emit("hola desde el hijo");
  }

  ngOnInit(): void {
    console.log(this.recibido);
    console.log(this.recibidoArray);
  }
}
