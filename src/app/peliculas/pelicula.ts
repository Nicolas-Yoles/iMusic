import { actorPeliculaDTO } from '../actores/actor';
import { cineDTO } from '../cines/cine';
import { generoDTO } from '../generos/genero';

export interface PeliculaCreacionDTO {
  titulo: string;
  resumen: string;
  enCines: boolean;
  trailer: string;
  fechaLanzamiento: Date;
  poster: File;
  generosIds: number[];
  actores: actorPeliculaDTO[];
  cinesIds: number[];
}

export interface PeliculaDTO {
  id: number;
  titulo: string;
  resumen: string;
  enCines: boolean;
  trailer: string;
  fechaLanzamiento: Date;
  poster: string;
  generos: generoDTO[];
  actores: actorPeliculaDTO[];
  cines: cineDTO[];
}

export interface PeliculasPostGet {
  generos: generoDTO[];
  cines: cineDTO[];
}

export interface LandingPageDTO {
  enCines: PeliculaDTO[];
  proximosEstrenos: PeliculaDTO[];
}

export interface PeliculaPutGet {
  pelicula: PeliculaDTO;
  generosSeleccionados: generoDTO[];
  generosNoSeleccionados: generoDTO[];
  cinesSeleccionados: cineDTO[];
  cinesNoSeleccionados: cineDTO[];
  actores: actorPeliculaDTO[];

}