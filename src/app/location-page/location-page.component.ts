import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

declare const L: any;

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.css']
})
export class LocationPageComponent implements OnInit {

  lat: number;
  long: number;

  locationForm: FormGroup;

  constructor(private fb: FormBuilder,
     private userService:UserService,
     private router:Router) { }

  ngOnInit() {      
    this.initForm();
    this.getLocation();  
  }

  initForm(): void {
    this.locationForm = this.fb.group({
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
    });
  }

  getLocationService(): Promise<any> {
    return new Promise(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          resp => {
            resolve({ lng: resp.coords.longitude.toFixed(6), lat: resp.coords.latitude.toFixed(6) });
          }
        );
      }
    );
  }

  getLocation() {
    console.log("fetching");
    this.getLocationService().then(
      async resp => {
        this.lat = resp.lat;
        this.long = resp.lng;
        console.log(resp);
        this.LoadMap();
      }
    )
  }

  LoadMap() {
    let mymaptwo = L.map('map').setView([this.lat, this.long], 13);
    console.log(mymaptwo);
    //open street api
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: ['a', 'b', 'c']
    }).addTo(mymaptwo);

    let marker = L.marker([this.lat, this.long]).addTo(mymaptwo);
  }

  nextPage(){
    this.userService.registerAddress = this.locationForm.value['address'];
    this.userService.registerCity = this.locationForm.value['city'];
    this.userService.registerState = this.locationForm.value['state'];
    this.router.navigate(["/register"]);
  }


  isValidInput(fieldName): boolean {
    return this.locationForm.controls[fieldName].invalid &&
      (this.locationForm.controls[fieldName].dirty || this.locationForm.controls[fieldName].touched);
  }


}
