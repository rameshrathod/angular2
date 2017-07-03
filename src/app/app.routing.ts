import {RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { WelcomeNoteComponent } from './welcome-note/welcome-note.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { LinkdemoComponent } from './linkdemo/linkdemo.component';

import { AuthGuard } from './_guards/auth.guard';



const appRoutes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'app-welcome-note', component: WelcomeNoteComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'contact-us', component: ContactusComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'link1', component: LinkdemoComponent },
  {
    path: 'app-profiles',
    component: ProfilesComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
