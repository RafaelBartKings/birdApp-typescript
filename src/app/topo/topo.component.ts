import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable } from 'rxjs/internal/Observable';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService],
})
export class TopoComponent implements OnInit {
  public ofertas: Observable<Oferta[]>;

  constructor(private ofertasService: OfertasService) {}

  ngOnInit() {}

  public pesquisa(termoDaPesquisa: string): void {
    this.ofertas = this.ofertasService.pesquisaOfertas(termoDaPesquisa);

    this.ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas),
      (error: any) => console.log('Erro status:', error.status),
      () => console.log(`Fluxo de eventos completo!`)
    );
  }
}
