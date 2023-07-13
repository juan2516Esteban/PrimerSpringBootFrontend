import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Editorial } from "../Models/Editorial";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EditorialService {
  constructor(private http: HttpClient) {}

  public urlEditorial = environment.urlEditorial;

  public enviareditorial(editorial: Editorial) {
    return this.http.post(this.urlEditorial + "/crearEditorial", editorial);
  }

  public obtenerEditorial(id: number) {
    return this.http.get(this.urlEditorial + "/obtenerEditorial?id=" + id);
  }
}
