import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/multipleSelectorModel';
import { PeliculaCreacionDTO } from '../pelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css'],
})
export class CrearPeliculaComponent implements OnInit {
  constructor(
    private peliculasService: PeliculasService,
    private router: Router
  ) {}

  generosNoSeleccionados: MultipleSelectorModel[];
  cinesNoSeleccionados: MultipleSelectorModel[];

  ngOnInit(): void {
    this.peliculasService.postGet()
    .subscribe(resultado => {
      this.generosNoSeleccionados = resultado.generos.map(genero =>{
        return <MultipleSelectorModel>{llave: genero.id, valor: genero.nombre}
      });
      this.cinesNoSeleccionados = resultado.cines.map(cine =>{
        return <MultipleSelectorModel>{llave: cine.id, valor: cine.nombre}
      });


    }, error => console.error());
  }

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    console.log(pelicula);
  }
}
