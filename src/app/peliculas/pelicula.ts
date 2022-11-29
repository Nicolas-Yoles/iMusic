import { actorPeliculaDTO } from "../actores/actor";
import { cineDTO } from "../cines/cine";
import { generoDTO } from "../generos/genero";

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
    titulo: string;
    resumen: string;
    enCines: boolean;
    trailer: string;
    fechaLanzamiento: Date;
    poster: string;
  }

export interface PeliculasPostGet{
  generos: generoDTO[];
  cines: cineDTO[];
}