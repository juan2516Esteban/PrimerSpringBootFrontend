import { Component, OnInit } from "@angular/core";
import { RickAndMortyService } from "src/app/service/rick-and-morty.service";
import { MenuItem } from "primeng/api";
import { Router } from "@angular/router";

@Component({
  selector: "app-episodios",
  templateUrl: "./episodios.component.html",
  styleUrls: ["./episodios.component.css"]
})
export class EpisodiosComponent implements OnInit {
  constructor(private service: RickAndMortyService, private router: Router) {
    this.odtenerEpisodios();
  }

  ngOnInit() {
    this.items = [
      { label: "Iniciar sesion", routerLink: "/loggin" },
      { label: "Padre", routerLink: "/padre" },
      { label: "Hijo", routerLink: "/hijo" }
    ];

    this.home = { icon: "pi pi-home", routerLink: "/" };

    console.log(this.items);
  }

  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  public episodios?: any;

  displayedColumns: string[] = ["id", "name", " air_date", "episode"];

  public odtenerEpisodios() {
    this.service.obtenerEpisodios().subscribe((results: any) => {
      this.episodios = Array.from(results.results);
    });
  }

  public capturarId(id: number) {
    console.log(id);
    this.router.navigate(["/infoRick", id]);
  }
}
