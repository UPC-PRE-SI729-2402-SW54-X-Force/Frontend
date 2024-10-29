import { Component, EventEmitter, Output, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-destination-map',
  standalone: true,
  templateUrl: './destination-map.component.html',
  styleUrls: ['./destination-map.component.css']
})
export class DestinationMapComponent implements AfterViewInit {
  @Output() locationSelected = new EventEmitter<string>();
  public map!: L.Map;
  private marker!: L.Marker;

  ngAfterViewInit(): void {
    // Inicializar el mapa en el contenedor después de que el componente esté completamente renderizado
    this.map = L.map('map', {
      center: [-12.0464, -77.0428],
      zoom: 13
    });

    // Añadir la capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    // Configurar evento de clic en el mapa
    this.map.on('click', (e: L.LeafletMouseEvent) => {
      const { lat, lng } = e.latlng;

      // Mover el marcador o crear uno nuevo
      if (this.marker) {
        this.marker.setLatLng([lat, lng]);
      } else {
        this.marker = L.marker([lat, lng]).addTo(this.map);
      }

      // Obtener la dirección usando geocodificación inversa
      this.getAddressFromCoords(lat, lng);
    });

    // Asegurarse de que el mapa se renderice correctamente
    setTimeout(() => {
      this.map.invalidateSize();
    }, 100);
  }

  private getAddressFromCoords(lat: number, lng: number): void {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const address = data.address;
        const district = address.suburb || address.neighbourhood || address.village || address.town || address.city_district || '';

        // Revisar si la ciudad es "Lima Metropolitana" y cambiarla a "Lima"
        let city = address.city || address.town || address.village || address.state || '';
        if (city === 'Lima Metropolitana') {
          city = 'Lima';
        }

        const formattedAddress = `${district}, ${city}`;
        this.locationSelected.emit(formattedAddress);
      })
      .catch(error => console.error('Error al obtener la dirección:', error));
  }
}
