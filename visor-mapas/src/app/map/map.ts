import { Component, AfterViewInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import TileWMS from 'ol/source/TileWMS';
import { PanelModule } from 'primeng/panel';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { Geoportal } from "../features/pages/geoportal/geoportal";
@Component({
  selector: 'app-map',
  imports: [PanelModule, CheckboxModule, CardModule, Geoportal],
  templateUrl: './map.html',
  template: ''
})
export class MapComponent implements AfterViewInit {

  ngAfterViewInit(): void {

    const wmsLayer = new TileLayer({
      source: new TileWMS({
      url: 'http://localhost:8080/geoserver/upea/wms',
      params: {
        'LAYERS': 'upea:departamentos',
        'TILED': true,
        'FORMAT': 'image/png'
      },
      serverType: 'geoserver'
    })
    });

    new Map({
      target: 'map',
      layers: [
        new TileLayer({ source: new OSM() }),
        wmsLayer
      ],
      view: new View({
        center: fromLonLat([-63.5887, -16.2902]),
        zoom: 5,
        minZoom: 4,
        maxZoom: 18
      })
    });
  }
}
