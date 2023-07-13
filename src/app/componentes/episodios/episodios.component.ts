import { Component, OnInit } from "@angular/core";
import { RickAndMortyService } from "src/app/service/rick-and-morty.service";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-episodios",
  templateUrl: "./episodios.component.html",
  styleUrls: ["./episodios.component.css"]
})
export class EpisodiosComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: "Computer" },
      { label: "Notebook" },
      { label: "Accessories" },
      { label: "Backpacks" },
      { label: "Item" }
    ];

    this.home = { icon: "pi pi-home", routerLink: "/" };

    console.log(this.items);
  }

  public episodios?: any;

  constructor(private service: RickAndMortyService) {
    this.odtenerEpisodios();
  }

  displayedColumns: string[] = ["id", "name", " air_date", "episode"];

  public odtenerEpisodios() {
    this.service.obtenerEpisodios().subscribe((results: any) => {
      this.episodios = Array.from(results.results);
      this.mostrarEpisodios();
    });
  }

  public mostrarEpisodios() {
    console.log(this.episodios);
  }
}
