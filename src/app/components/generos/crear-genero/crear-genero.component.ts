import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit {

  // Los Servicios se inyectan a través del constructor de la Class
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  guardarCambios() {
    //..guardar los cambios (a través de un servicio (backend))
    this.router.navigate(['/generos']);
  }

}
