import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Tution } from 'src/app/classes/tution';
import { TutionService } from 'src/app/Services/tution.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-explore-teachers',
  templateUrl: './explore-teachers.component.html',
  styleUrls: ['./explore-teachers.component.css']
})
export class ExploreTeachersComponent implements OnInit {

  searchedTutions: Tution[] = [];

  pageSize: number = 10;
  page: number = 1;

  isPaginationRequired: boolean = true;

  ngOnInit() {
    this.getLocation();
  }

  closeResult = '';

  constructor(private modalService: NgbModal,
     private _snackBar: MatSnackBar,
      private tutionservice: TutionService,
      private userService: UserService) { }


  openSnackBar() {
    this._snackBar.open('Subscribed!!', 'Happy Learning', {
      duration: 500
    });
  }

  open(content) {
    this.modalService.open(content,  { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  async getSearchedTutions(lat: number, long: number) {
    await this.tutionservice.getNearbyTutions(lat, long, "Fifteen").subscribe(
      (res) => {
        this.searchedTutions = res;
        this.userService.searchedTutions = res;
        console.log(this.searchedTutions);

        if (this.searchedTutions.length <= 10) {
          this.isPaginationRequired = false;
        }
        else {
          this.isPaginationRequired = true;
        }
      }
    );
  }

  getLocationService(): Promise<any> {
    return new Promise(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          resp => {
            resolve({ lng: resp.coords.longitude.toFixed(6), lat: resp.coords.latitude.toFixed(6) });
          }
        )
      }
    )
  }

  getLocation() {
    console.log("fetching");
    this.getLocationService().then(
      async resp => {
        await this.getSearchedTutions(resp.lat, resp.lng);
        this.userService.lat = resp.lat;
        this.userService.long = resp.lng;
        console.log(resp);
      }
    )
  }

}

