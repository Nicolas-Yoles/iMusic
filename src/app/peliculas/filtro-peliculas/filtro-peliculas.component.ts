import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css'],
})
export class FiltroPeliculasComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;
  formularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  };

  generos = [
    { id: 1, nombre: 'Drama' },
    { id: 2, nombre: 'Comedia' },
    { id: 3, nombre: 'Accion' },
  ];

  peliculas = [
    {
      titulo: 'Harry Potter',
      enCines: false,
      proximosEstrenos: true,
      generos: [1, 2],
      poster:
        'https://es.web.img2.acsta.net/pictures/14/04/30/11/55/592219.jpg',
    },
    {
      titulo: 'LOTR',
      enCines: true,
      proximosEstrenos: false,
      generos: [3],
      poster:
        'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
    },
    {
      titulo: 'El Hobbit',
      enCines: false,
      proximosEstrenos: true,
      generos: [1, 3],
      poster:
        'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/el-hobbit-la-desolacion-de-smaug/6554952-4-esl-ES/El-Hobbit-La-Desolacion-de-Smaug.jpg',
    },
  ];

  peliculasOriginal = this.peliculas;

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);

    this.form.valueChanges.subscribe((valores) => {
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores);
    });
  }

  buscarPeliculas(valores: any) {
    if (valores.titulo) {
      this.peliculas = this.peliculas.filter(
        (pelicula) => pelicula.titulo.indexOf(valores.titulo) !== -1
      );
    }
    if (valores.generoId !== 0) {
      this.peliculas = this.peliculas.filter(
        (pelicula) => pelicula.generos.indexOf(valores.generoId) !== -1
      );
    }
    if (valores.proximosEstrenos) {
      this.peliculas = this.peliculas.filter(
        (pelicula) => pelicula.proximosEstrenos
      );
    }
    if (valores.enCines) {
      this.peliculas = this.peliculas.filter((pelicula) => pelicula.enCines);
    }
  }

  limpiar() {
    this.form.patchValue(this.formularioOriginal);
  }
}
