import { Component, OnInit } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})

 

export class MapaComponent implements OnInit {

  constructor() { }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 12,
    center: latLng(39.45419664659368, -31.12838745117188)
  };


  capas: Marker<any>[] = [];

  ngOnInit(): void {
  }


  manejarClick(event: LeafletMouseEvent)  {
    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;
    console.log({latitud, longitud})

    this.capas = [];
    this.capas.push(marker([latitud, longitud]));
  }

}
 

