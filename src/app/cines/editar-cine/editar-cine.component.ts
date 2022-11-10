import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css'],
})
export class EditarCineComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  modelo: cineDTO = {nombre: "Sambil", latitud:-31.434636439954172 , longitud:-64.17829871177675 }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // alert(params.id);
    });
  }

  guardarCambios(cine: cineCreacionDTO){
    console.log(cine);
  }
}
