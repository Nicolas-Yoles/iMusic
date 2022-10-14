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
          titulo: 'harry potter',
          fechaLanzamiento: new Date(),
          precio: 150,
        },
        { titulo: 'harry potter 2', fechaLanzamiento: new Date(), precio: 300 },
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
}
