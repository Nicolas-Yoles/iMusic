import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { actorPeliculaDTO } from 'src/app/actores/actor';
import { cineDTO } from 'src/app/cines/cine';
import { generoDTO } from 'src/app/generos/genero';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/multipleSelectorModel';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css'],
})
export class EditarPeliculaComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService,
    private router: Router
  ) {}

  modelo: PeliculaDTO;
  generosSeleccionados: MultipleSelectorModel[];
  generosNoSeleccionados: MultipleSelectorModel[];
  cinesSeleccionados: MultipleSelectorModel[];
  cinesNoSeleccionados: MultipleSelectorModel[];
  actoresSeleccionados: actorPeliculaDTO[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.peliculasService.putGet(params.id)
      .subscribe((peliculaPutGet) => {
        this.modelo = peliculaPutGet.pelicula;

        this.generosSeleccionados = peliculaPutGet.generosSeleccionados.map(
          (genero) => {
            return <MultipleSelectorModel>{
              llave: genero.id,
              valor: genero.nombre,
            };
          }
        );

        this.generosNoSeleccionados = peliculaPutGet.generosNoSeleccionados.map(
          (genero) => {
            return <MultipleSelectorModel>{
              llave: genero.id,
              valor: genero.nombre,
            };
          }
        );

        this.cinesSeleccionados = peliculaPutGet.cinesSeleccionados.map(
          (cine) => {
            return <MultipleSelectorModel>{
              llave: cine.id,
              valor: cine.nombre,
            };
          }
        );

        this.cinesNoSeleccionados = peliculaPutGet.cinesNoSeleccionados.map(
          (cine) => {
            return <MultipleSelectorModel>{
              llave: cine.id,
              valor: cine.nombre,
            };
          }
        );

        this.actoresSeleccionados = peliculaPutGet.actores;
      });
    });
  }

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    this.peliculasService
      .editar(this.modelo.id, pelicula)
      .subscribe(() => this.router.navigate(['/pelicula/' + this.modelo.id]));
  }
}
