import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RickAndMortyService } from "src/app/service/rick-and-morty.service";

@Component({
  selector: "app-info-rick",
  templateUrl: "./info-rick.component.html",
  styleUrls: ["./info-rick.component.css"]
})
export class InfoRickComponent {
  constructor(
    private rick: RickAndMortyService,
    private route: ActivatedRoute
  ) {
    this.obtenerInfoEpisode(this.obtenerId());
  }

  public espisodiosInfo: any | undefined = {};
  private id!: number;

  obtenerInfoEpisode(id: number) {
    this.rick.obtenerinfoEpisode(id).subscribe((resultado: any) => {
      this.espisodiosInfo = resultado;
    });
  }

  public obtenerId(): number {
    this.route.paramMap.subscribe((params: any) => {
      this.id = params.get("id");
    });
    return this.id;
  }
}
