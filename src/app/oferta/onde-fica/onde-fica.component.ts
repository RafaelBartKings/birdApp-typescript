import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService],
})
export class OndeFicaComponent {
  public ondeFica: string = '';

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) {}

  ngOnInit() {
    this.ofertasService
      .getOndeFicaOfertatId(this.route.parent.snapshot.params['id'])
      .then((descricao: string) => {
        this.ondeFica = descricao;
      });
  }
}
