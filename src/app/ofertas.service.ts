import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OfertasService {
  URL = 'http://localhost:3000/ofertas?destaque=true';

  URLCategoria: any;

  constructor(private http: HttpClient) {}

  public getOfertas(): Promise<Oferta[]> {
    // efetuar requisição HTTP e retornar um array de ofertas
    return firstValueFrom(this.http.get<Oferta[]>(this.URL)).then(
      (resposta: any) => resposta
    );
  }

  public getOfertasCategoria(categoria: string): Promise<Oferta[]> {
    this.URLCategoria = `http://localhost:3000/ofertas?categoria=${categoria}`;

    return firstValueFrom(this.http.get(this.URLCategoria)).then(
      (resposta: any) => resposta
    );
  }
}
