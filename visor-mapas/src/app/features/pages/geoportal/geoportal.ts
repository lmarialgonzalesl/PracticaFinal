import { Component } from '@angular/core';
import { LayerPanel } from "../../geoportal/components/layer-panel/layer-panel";
import { MapService } from '../../../core/services/map.service';

@Component({
  selector: 'app-geoportal',
  imports: [LayerPanel],
  templateUrl: './geoportal.html',
  styleUrl: './geoportal.css',
})
export class Geoportal {
  constructor(private mapService: MapService) { }
  ngOnInit() {
    this.mapService.initMap('map');
  }
}
