import { Component, OnInit } from '@angular/core';
import { Tution } from 'src/app/classes/tution';
import { TutionService } from 'src/app/Services/tution.service';
import { UserService } from 'src/app/Services/user.service';

declare const L: any;

@Component({
  selector: 'app-tution-list-map-page',
  templateUrl: './tution-list-map-page.component.html',
  styleUrls: ['./tution-list-map-page.component.css']
})
export class TutionListMapPageComponent implements OnInit {

  mapTutionName: string = "Select a Tution On Map";
  mapTutionId: number = null;
  address:string = "Some address in Chennai";
  city:string = "Chennai";
  stateOrUT:string = "Tamil Nadu";

  searchedTutions: Tution[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getTutions();
  }

  getTutions(){
    this.searchedTutions = this.userService.searchedTutions;
    this.LoadMap();
  }

  LoadMap() {
    let mymap = L.map('mapid').setView([this.userService.lat, this.userService.long], 13);
    console.log("mappppp");
    //mapbox api
    /* L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2F0eWFqaXQyNnBhdGlsIiwiYSI6ImNraGtsYWd5eTFtNWwycm1janYxeHhkNjMifQ.f37ss2YEkyonqS32sdA_Jg', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'your.mapbox.access.token'
    }).addTo(mymap); */


    //open street api
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: ['a', 'b', 'c']
    }).addTo(mymap);

    //let marker = L.marker([this.lat, this.long]).addTo(mymap);

    for (var i = 0; i < this.searchedTutions.length; ++i) {

      let mark = L.marker([this.searchedTutions[i].locationLatitude, this.searchedTutions[i].locationLongitude])
        .bindPopup("<div class=''><strong>" + this.searchedTutions[i].tutionName + "</strong></div>")
        .on('click', (e) => {
          console.log(e.target.valId);
          console.log(e.target.tutionName);
          //tempName = e.target.tutionName;
          this.mapTutionName = e.target.tutionName.charAt(0).toUpperCase() + e.target.tutionName.slice(1);
          this.mapTutionId = e.target.valId;
          this.address = e.target.address;
          this.city = e.target.city;
          this.stateOrUT = e.target.stateOrUT;

        })
        .addTo(mymap);

      mark.valId = this.searchedTutions[i].tutionId;
      mark.tutionName = this.searchedTutions[i].tutionName;
      mark.address = this.searchedTutions[i].teacher.address;
      mark.city = this.searchedTutions[i].teacher.city;
      mark.stateOrUT = this.searchedTutions[i].teacher.state;
    }
  }

}
