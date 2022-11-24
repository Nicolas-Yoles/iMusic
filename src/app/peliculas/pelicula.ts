import { cineDTO } from "../cines/cine";
import { generoDTO } from "../generos/genero";

export interface PeliculaDTO {
    titulo: string;
    resumen: string;
    enCines: boolean;
    trailer: string;
    fechaLanzamiento: Date;
    poster: string;
  }
  

export interface PeliculaCreacionDTO {
  titulo: string;
  resumen: string;
  enCines: boolean;
  trailer: string;
  fechaLanzamiento: Date;
  poster: File;
}


export interface PeliculasPostGet{
  generos: generoDTO[];
  cines: cineDTO[];
}