import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllSubjectsComponent } from './home/all-subjects/all-subjects.component';
import { HomepageComponent } from './home/homepage/homepage.component';

import { TuitionProfileComponent } from './home/tuition-profile/tuition-profile.component';
import { SigninComponent } from './common/users/signin/signin.component';
import { SignupComponent } from './common/users/signup/signup.component';

import { StudentPortalComponent } from './studentDashboard/student-portal/student-portal.component';
import { LearnPortalComponent } from './studentDashboard/learn-portal/learn-portal.component';
import { BooksPortalComponent } from './common/books-portal/books-portal.component';

import { TuitionPortalComponent } from './teacherDashboard/tuition-portal/tuition-portal.component';
import { UploadedDataComponent } from './teacherDashboard/uploaded-data/uploaded-data.component';
import { AddVideosComponent } from './teacherDashboard/Documents/Videos/add-videos/add-videos.component';
import { AddPapersComponent } from './teacherDashboard/Documents/Papers/add-papers/add-papers.component';
import { AddNotesComponent } from './teacherDashboard/Documents/Notes/add-notes/add-notes.component';
import { EditVideosComponent } from './teacherDashboard/Documents/Videos/edit-videos/edit-videos.component';
import { EditNotesComponent } from './teacherDashboard/Documents/Notes/edit-notes/edit-notes.component';
import { EditPapersComponent } from './teacherDashboard/Documents/Papers/edit-papers/edit-papers.component';
import { SuperUserPortalComponent } from './superUserDashboard/super-user-portal/super-user-portal.component';
import { ProposalsComponent } from './superUserDashboard/proposals/proposals.component';
import { RegStudentsComponent } from './superUserDashboard/reg-students/reg-students.component';
import { StudentDetailsComponent } from './studentDashboard/student-details/student-details.component';
import { ExploreTeachersComponent } from './studentDashboard/explore-teachers/explore-teachers.component';
import { ClassLearnComponent } from './studentDashboard/class-learn/class-learn.component';
import { RegisterTeacherComponent } from './common/Users/register as teacher/registerTeacher.component';
import { AboutDevComponent } from './common/about-dev/about-dev.component';
import { ManageRequestsComponent } from './teacherDashboard/manage-requests/manage-requests.component';
import { NonVerifiedVerificationPageComponent } from './teacherDashboard/manage-requests/non-verified-verification-page/non-verified-verification-page.component';
import { TutionEnrollPageComponent } from './studentDashboard/tution-enroll-page/tution-enroll-page.component';
import { BookPageComponent } from './studentDashboard/book-page/book-page.component';
import { OsmMapComponent } from './sample/osm-map/osm-map.component';
import { LocationPageComponent } from './location-page/location-page.component';
import { TutionListMapPageComponent } from './studentDashboard/tution-list-map-page/tution-list-map-page.component';
import { AuthGuard } from './Services/auth.guard';


const routes: Routes = [


  { path: 'home', component: HomepageComponent },
  { path: 'verification-page', component: NonVerifiedVerificationPageComponent },
  { path: 'manage-requests', component: ManageRequestsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  { path: 'registerTeacher', component: RegisterTeacherComponent },
  { path: 'tution-list-map', component: TutionListMapPageComponent },
  { path: 'allSubjects', component: AllSubjectsComponent },
  { path: 'tuitionProfile', component: TuitionProfileComponent, canActivate: [AuthGuard] },
  { path: "exploreTeachers", component: ExploreTeachersComponent },
  { path: 'tution-enroll', component: TutionEnrollPageComponent, canActivate: [AuthGuard] },
  { path: "student", component: StudentPortalComponent, canActivate: [AuthGuard] },
  { path: 'studentDetails', component: StudentDetailsComponent, canActivate: [AuthGuard] },
  { path: "tuitionPortal", component: TuitionPortalComponent, canActivate: [AuthGuard] },
  { path: "uploaded", component: UploadedDataComponent, canActivate: [AuthGuard] },


 
  { path: 'learnPortal', component: LearnPortalComponent, canActivate: [AuthGuard] },
  { path: 'booksPortal', component: BooksPortalComponent },
  { path: 'classPortal', component: ClassLearnComponent, canActivate: [AuthGuard] },


  { path: "addVideos", component: AddVideosComponent, canActivate: [AuthGuard] },
  { path: "editVideos", component: EditVideosComponent, canActivate: [AuthGuard] },
  { path: "addNotes", component: AddNotesComponent, canActivate: [AuthGuard] },
  { path: "editNotes", component: EditNotesComponent, canActivate: [AuthGuard] },
  { path: "addPapers", component: AddPapersComponent, canActivate: [AuthGuard] },
  { path: "editPapers", component: EditPapersComponent, canActivate: [AuthGuard] },
  { path: "books", component: BookPageComponent },
  { path: "location", component: LocationPageComponent },



  { path: "superUser", component: SuperUserPortalComponent, canActivate: [AuthGuard] },
  { path: "proposals", component: ProposalsComponent, canActivate: [AuthGuard] },
  { path: "regStudents", component: RegStudentsComponent },

  { path: "aboutDev", component: AboutDevComponent },
  { path: "maps", component: OsmMapComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
