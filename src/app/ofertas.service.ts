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
      this.http.get<Oferta[]>(`${URL_API}/ofertas?destaque=true`)
    ).then((resposta: any) => resposta);
  }

  public getOfertasCategoria(categoria: string): Promise<Oferta[]> {
    return firstValueFrom(
      this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
    ).then((resposta: any) => resposta);
  }

  public getOfertaId(id: number): Promise<Oferta> {
    return firstValueFrom(this.http.get(`${URL_API}/ofertas?id=${id}`)).then(
      (resposta: any) => resposta[0]
    );
  }

  public getComoUsarOfertId(id: number): Promise<string> {
    return firstValueFrom(this.http.get(`${URL_API}/como-usar?id=${id}`)).then(
      (resposta: any) => {
        return resposta[0].descricao;
      }
    );
  }

  public getOndeFicaOfertatId(id: number): Promise<string> {
    return firstValueFrom(this.http.get(`${URL_API}/onde-fica?id=${id}`)).then(
      (resposta: any) => {
        return resposta[0].descricao;
      }
    );
  }
}
