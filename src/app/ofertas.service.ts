import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { firstValueFrom } from 'rxjs';
import { URL_API } from './app.api';

@Injectable()
export class OfertasService {
  // private url_api = 'http://localhost:3000/ofertas';

  constructor(private http: HttpClient) {}

  public getOfertas(): Promise<Oferta[]> {
    // efetuar requisição HTTP e retornar um array de ofertas
    return firstValueFrom(
      this.http.get<Oferta[]>(`${URL_API}?destaque=true`)
    ).then((resposta: any) => resposta);
  }

  public getOfertasCategoria(categoria: string): Promise<Oferta[]> {
    return firstValueFrom(
      this.http.get(`${URL_API}?categoria=${categoria}`)
    ).then((resposta: any) => resposta);
  }

  public getOfertaId(id: number): Promise<Oferta> {
    return firstValueFrom(this.http.get(`${URL_API}?id=${id}`)).then(
      (resposta: any) => resposta[0]
    );
  }
}
