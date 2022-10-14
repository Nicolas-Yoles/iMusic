import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css'],
})
export class ListadoPeliculasComponent implements OnInit {
  constructor() {}
  @Input()
  peliculas;

  ngOnInit(): void {
    // this.peliculas = [];
    // this.peliculas = [
    //   {
    //     titulo: 'spiderman',
    //     fechaLanzamiento: new Date(),
    //     precio: 150,
    //   },
    //   { titulo: 'spiderman 2', fechaLanzamiento: new Date(), precio: 300 },
    // ];
  }

  remover(indicePelicula: number): void {
    this.peliculas.splice(indicePelicula, 1);
  }
}
