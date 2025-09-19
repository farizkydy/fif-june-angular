import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailCrediturComponent } from './pages/detail-creditur/detail-creditur.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SurveyorDetailComponent } from './pages/surveyor-detail/surveyor-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './shared/auth/auth.guard';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'login', component: LoginComponent},
  {path: ':creditur/:id', component: DetailCrediturComponent},
  {path: 'surveyor/:id', component: SurveyorDetailComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'},
 
];
