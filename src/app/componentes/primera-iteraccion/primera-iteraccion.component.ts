import { Component } from "@angular/core";
import { LibroDto } from "src/assets/Models/LibroDto";

@Component({
  selector: "app-primera-iteraccion",
  templateUrl: "./primera-iteraccion.component.html",
  styleUrls: ["./primera-iteraccion.component.css"]
})
export class PrimeraIteraccionComponent {
  constructor() {
    console.log(this.nombrelist2);
    this.addElemtList("Lupita");
    this.addElemtLast("Princesa");
    console.log(this.nombrelist2);
    console.log(this.cocatList(this.nombrelist2));

    let libro: LibroDto = new LibroDto();

    libro.autor = "Juan Esteban Salazar";
    libro.idLibro = 1;
    libro.titulo = "El Ganador";

    this.listLibro.push(libro);
  }

  // Declaración de variables

  public nombre: String = "Juan Esteban Salazar"; //string publico

  private edad: number = 19; // entero o flotante privado

  private probabilidad: number = 4.5;

  protected familiares: String = "Silvio Salzar Gavirial"; // string protegido

  public estaProgresando: boolean = false; // booleano publico

  public cualquierTipo: any = false;

  public imagenUrl =
    "https://creativegroup-blog-prd-eu-west-1-recharge-blog.s3.eu-west-1.amazonaws.com/blog/wp-content/uploads/2023/02/17163352/aplicacion_del_presupuesto_recharge.com.jpg";

  // declaración de arrays o listas

  public nombresList?: String[]; // el simbolo de interrogación es para decirle que no es obligatorio instanciarlo

  public nombrelist2: String[] = ["juan", "pedro", "Nora", "Silvio"];

  public numerosList: any[] = [1, 2, 3, 4];

  public listLibro: LibroDto[] = [];

  // Declaración de funciones

  public addElemtList(nombre: String): void {
    this.nombrelist2.unshift(nombre); //para agregar elementos a una lista al principio
  }

  private addElemtLast(nombre: String): void {
    this.nombrelist2.push(nombre); // para agregar un elemento a una lista al final
  }

  public cocatList(lista: String[]): any[] {
    return this.numerosList.concat(lista);
  }

  public estadoBoton(estado: boolean): boolean {
    this.estaProgresando = estado;
    return this.estaProgresando;
  }

  public mostrarEnvento(event: any): void {
    console.log(event);
  }
}
