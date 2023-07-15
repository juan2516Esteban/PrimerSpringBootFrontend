import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class RickAndMortyService {
  constructor(private http: HttpClient) {}

  private urlRick = environment.urlRickAndMorty;

  public obtenerPersonajes() {
    return this.http.get(this.urlRick + "/character");
  }

  public obtenerEpisodios() {
    return this.http.get(this.urlRick + "/episode");
  }

  public obtenerinfoEpisode(id: number) {
    return this.http.get(this.urlRick + "/episode/" + id);
  }
}
