import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-osm-map',
  templateUrl: './osm-map.component.html',
  styleUrls: ['./osm-map.component.css']
})
export class OsmMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getLocation();
  }

  getLocationService(): Promise<any> {
    return new Promise(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          resp=>{
            resolve({lng:resp.coords.longitude.toFixed(6), lat:resp.coords.latitude.toFixed(6)});
          }
        )
      }
    )
  }

  getLocation() {
    console.log("fetching");
    this.getLocationService().then(
      resp=>{
        console.log(resp);
      }
    )
  }

}
