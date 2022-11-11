import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css'],
})
export class EditarPeliculaComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  modelo: PeliculaDTO = {
    titulo: 'Harry Potter',
    trailer: 'abc',
    enCines: true,
    resumen: 'cosa',
    fechaLanzamiento: new Date(),
    poster: 'https://es.web.img2.acsta.net/pictures/14/04/30/11/55/592219.jpg',
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // alert(params.id);
    });
  }

  guardarCambios(pelicula: PeliculaCreacionDTO){
    console.log(pelicula);
  }
}
