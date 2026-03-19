import { Injectable } from "@angular/core";
import TileLayer from "ol/layer/Tile";
import { TileWMS } from "ol/source";

@Injectable({ providedIn: 'root' })
export class GeoServerService {

  private baseUrl = 'http://localhost:8080/geoserver';

  getWMSLayer(layerName: string) {
    return new TileLayer({
      source: new TileWMS({
        url: `${this.baseUrl}/wms`,
        params: {
          LAYERS: layerName,
          TILED: true
        },
        serverType: 'geoserver'
      })
    });
  }

  getWFS(layerName: string) {
    return `${this.baseUrl}/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=${layerName}&outputFormat=application/json`;
  }
}
