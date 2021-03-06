import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
import * as leaflet from 'leaflet';
import { LeafletMouseEvent, Map } from 'leaflet';
import 'leaflet-control-geocoder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  private elementRef: ElementRef;
  private map: Map;

  public constructor(element: ElementRef) {
    // this.elementRef = element;
    // this.loadMap();
    // this.loadTiles();
    // this.loadGeocoder();
  }

  private loadMap(): void {
    const shadowRoot = this.elementRef.nativeElement.shadowRoot;
    const container = shadowRoot.getElementById('mapContainer');
    const mapdiv = document.createElement('div');
    mapdiv.setAttribute('id', 'map');
    container.appendChild(mapdiv);
    this.map = leaflet.map(mapdiv, {
      center: [51.505, -0.09],
      zoom: 13
    });
  }

  private loadTiles(): void {
    const tiles = leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
  }

  private loadGeocoder(): void {
    const geocoder: any = (leaflet.Control as any).Geocoder.nominatim();
    this.map.on('click', (event: LeafletMouseEvent) => {
      geocoder.reverse(event.latlng, this.map.options.crs?.scale(this.map.getZoom()), (results: any) => {
        this.elementRef.nativeElement.dispatchEvent(new CustomEvent('locationSelected', {
          bubbles: true,
          detail: {
            name: results[0].name
          }
        }));
      });
    });
  }
}
