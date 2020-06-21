import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import * as leaflet from 'leaflet';
import { LeafletMouseEvent, Map } from 'leaflet';
import 'leaflet-control-geocoder';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LeafletComponent implements OnInit {
  private map: Map;

  constructor(private elementRef: ElementRef) { }

  public ngOnInit(): void {
    this.loadMap();
    this.loadTiles();
    this.loadGeocoder();
  }

  private loadMap(): void {
    const shadowRoot = this.elementRef.nativeElement.shadowRoot;
    const mapdiv = document.createElement('div');
    mapdiv.setAttribute('id', 'map');
    shadowRoot.appendChild(mapdiv);
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
          composed: true,
          detail: {
            name: results[0].name
          }
        }));
      });
    });
  }
}
