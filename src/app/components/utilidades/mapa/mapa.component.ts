import { Component, OnInit, NgModule } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

imports: [
  LeafletModule
]



@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})





export class MapaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

}
 

