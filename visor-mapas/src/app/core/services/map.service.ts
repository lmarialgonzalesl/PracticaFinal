import { Injectable } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
@Injectable({
  providedIn: 'root'  // 🔥 ESTO SOLUCIONA TODO
})
export class MapService {

  private map!: Map;

  initMap(target: string): Map {
    this.map = new Map({
      target,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [-68.15, -16.5], // La Paz aprox
        zoom: 12,
        projection: 'EPSG:4326'
      })
    });

    return this.map;
  }

  getMap(): Map {
    return this.map;
  }
}
