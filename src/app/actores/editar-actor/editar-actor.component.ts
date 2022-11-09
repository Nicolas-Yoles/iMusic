import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css'],
})
export class EditarActorComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  modelo: actorDTO = {nombre: 'nicolas', fechaNacimiento: new Date(), foto: 'https://static01.nyt.com/images/2022/05/05/arts/05bad-bunny-ESP-promo/05bad-bunny1-mediumSquareAt3X.jpg'};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // alert(params.id);
    });
  }

  guardarCambios(actor: actorCreacionDTO){
    console.log(actor);
  }
}
