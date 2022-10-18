import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      // this.peliculasEnCines = [];
      this.peliculasEnCines = [
        {
          poster: "https://w0.peakpx.com/wallpaper/811/982/HD-wallpaper-harry-potter-6-harry-potter-magic-the-half-blood-prince.jpg",
          titulo: 'Harry Potter VI',
          fechaLanzamiento: new Date(),
          precio: 150,
        },
        {
          poster: "https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg",
          titulo: 'The Lord of the Ring III',
          fechaLanzamiento: new Date(),
          precio: 300,
        },
      ];
      this.peliculasProximosEstrenos = [
        // {
        //   titulo: 'The Avengers 4',
        //   fechaLanzamiento: new Date(),
        //   precio: 150,
        // },
        // {
        //   titulo: 'Harry Potter the Prequel',
        //   fechaLanzamiento: new Date(),
        //   precio: 300,
        // },
      ];
    }, 300);
  }

  peliculasEnCines;
  peliculasProximosEstrenos;
  title = 'front-end';

  manejarRated(voto: number): void {
    alert(voto);
  }
}
