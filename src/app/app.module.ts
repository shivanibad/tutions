import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AllSubjectsComponent } from './home/all-subjects/all-subjects.component';
import { SampleComponent } from './sample/sample.component';
import { TuitionProfileComponent } from './home/tuition-profile/tuition-profile.component';

import { SigninComponent } from './common/users/signin/signin.component';
import { SignupComponent } from './common/users/signup/signup.component';
import { DocumentsComponent } from './common/documents/documents.component';
import { StudentProfileComponent } from './studentDashboard/student-profile/student-profile.component';
import { TuitionDetailsComponent } from './teacherDashboard/tuition-details/tuition-details.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { StudentPortalComponent } from './studentDashboard/student-portal/student-portal.component';
import { LearnPortalComponent } from './studentDashboard/learn-portal/learn-portal.component';
import { BooksPortalComponent } from './common/books-portal/books-portal.component';

import { ClassLearnComponent } from './studentDashboard/class-learn/class-learn.component';

import { TuitionPortalComponent } from './teacherDashboard/tuition-portal/tuition-portal.component';
import { UploadedDataComponent } from './teacherDashboard/uploaded-data/uploaded-data.component';
import { ProposalsComponent } from './superUserDashboard/proposals/proposals.component';
import { RegStudentsComponent } from './superUserDashboard/reg-students/reg-students.component';
import { AddVideosComponent } from './teacherDashboard/Documents/Videos/add-videos/add-videos.component';
import { AddNotesComponent } from './teacherDashboard/Documents/Notes/add-notes/add-notes.component';
import { AddPapersComponent } from './teacherDashboard/Documents/Papers/add-papers/add-papers.component';
import { VideoInfoComponent } from './teacherDashboard/Documents/Videos/video-info/video-info.component';
import { EditVideosComponent } from './teacherDashboard/Documents/Videos/edit-videos/edit-videos.component';
import { EditNotesComponent } from './teacherDashboard/Documents/Notes/edit-notes/edit-notes.component';
import { EditPapersComponent } from './teacherDashboard/Documents/Papers/edit-papers/edit-papers.component';
import { NotesInfoComponent } from './teacherDashboard/Documents/Notes/notes-info/notes-info.component';
import { PaperInfoComponent } from './teacherDashboard/Documents/Papers/paper-info/paper-info.component';
import { SuperUserPortalComponent } from './superUserDashboard/super-user-portal/super-user-portal.component';
import { StudentDetailsComponent } from './studentDashboard/student-details/student-details.component';
import { EditDetailsComponent } from './studentDashboard/edit-details/edit-details.component';
import { ExploreTeachersComponent } from './studentDashboard/explore-teachers/explore-teachers.component';
import { ImgUploadComponent } from './common/users/img-upload/img-upload.component';
import { RegisterTeacherComponent } from './common/Users/register as teacher/registerTeacher.component';

import {MatExpansionModule} from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material';

import { AboutDevComponent } from './common/about-dev/about-dev.component';
import { ManageRequestsComponent } from './teacherDashboard/manage-requests/manage-requests.component';
import { environment } from 'src/environments/environment';
import { StudentInfoComponent } from './teacherDashboard/tuition-portal/student-info/student-info.component';
import { NonVerifiedComponent } from './teacherDashboard/manage-requests/non-verified/non-verified.component';
import { NonVerifiedVerificationPageComponent } from './teacherDashboard/manage-requests/non-verified-verification-page/non-verified-verification-page.component';
import { EnrollmentRequestTableRowComponent } from './teacherDashboard/manage-requests/enrollment-request-table-row/enrollment-request-table-row.component';
import { TutionEnrollPageComponent } from './studentDashboard/tution-enroll-page/tution-enroll-page.component';
import { SubscriptionInfoComponent } from './studentDashboard/student-portal/subscription-info/subscription-info.component';
import { ExploreInfoComponent } from './studentDashboard/explore-teachers/explore-info/explore-info.component';
import { BookPageComponent } from './studentDashboard/book-page/book-page.component';
import { OsmMapComponent } from './sample/osm-map/osm-map.component';
import { BookUploadComponent } from './studentDashboard/book-upload/book-upload.component';
import { LocationPageComponent } from './location-page/location-page.component';
import { TutionListMapPageComponent } from './studentDashboard/tution-list-map-page/tution-list-map-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    AllSubjectsComponent,
    SampleComponent,
    TuitionProfileComponent,
   
    SigninComponent,
    SignupComponent,
    DocumentsComponent,
    StudentProfileComponent,
    TuitionDetailsComponent,
    StudentPortalComponent,
    LearnPortalComponent,
    BooksPortalComponent,
  
    ClassLearnComponent,
    TuitionPortalComponent,
    UploadedDataComponent,
    ProposalsComponent,
    RegStudentsComponent,
    AddVideosComponent,
    AddNotesComponent,
    AddPapersComponent,
    VideoInfoComponent,
    EditVideosComponent,
    EditNotesComponent,
    EditPapersComponent,
    NotesInfoComponent,
    PaperInfoComponent,
    SuperUserPortalComponent,
    StudentDetailsComponent,
    EditDetailsComponent,
    ExploreTeachersComponent,
    ImgUploadComponent,
    RegisterTeacherComponent,
    AboutDevComponent,
    ManageRequestsComponent,
    StudentInfoComponent,
    NonVerifiedComponent,
    NonVerifiedVerificationPageComponent,
    EnrollmentRequestTableRowComponent,
    TutionEnrollPageComponent,
    SubscriptionInfoComponent,
    ExploreInfoComponent,
    BookPageComponent,
    OsmMapComponent,
    BookUploadComponent,
    LocationPageComponent,
    TutionListMapPageComponent
   
  ],
  entryComponents: [
    SigninComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    CarouselModule,
    HttpClientModule,
    MatExpansionModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTabsModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule
   
  ],   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
