import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css']
})
export class CrearCineComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  guardarCambios(){
    // ... guardar los cambios
    this.router.navigate(['/cines']);
  }


}
