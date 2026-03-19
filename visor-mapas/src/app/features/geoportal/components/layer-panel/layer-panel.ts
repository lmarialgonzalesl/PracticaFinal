import { Component } from '@angular/core';
import { MapService } from '../../../../core/services/map.service';
import { GeoServerService } from '../../../../core/services/geoserver.service';
import { ListboxModule } from 'primeng/listbox';
import { PanelModule } from 'primeng/panel';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-layer-panel',
  imports: [PanelModule, ListboxModule, FormsModule],
  templateUrl: './layer-panel.html',
  styleUrl: './layer-panel.css',
})
export class LayerPanel {
  constructor(private mapService: MapService, private geoService: GeoServerService) { }
  selectedLayer: any;
  layers = [
    { name: 'Departamentos', layer: 'upea:departamentos' },
    { name: 'Municipios', layer: 'upea:municipios' }
  ];

  toggleLayer(event: any) {
    const selected = event?.value;

    if (!selected || !selected.layer) return;

    const map = this.mapService.getMap();

    // Buscar si ya existe
    const existing = map.getLayers().getArray()
      .find((l: any) => l.get('name') === selected.layer);

    if (existing) {
      map.removeLayer(existing); //apagar
    } else {
      const layer = this.geoService.getWMSLayer(selected.layer);
      layer.set('name', selected.layer); // clave para identificar
      map.addLayer(layer); //encender
    }
  }

}
