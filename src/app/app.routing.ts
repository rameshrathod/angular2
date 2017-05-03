import {RouterModule, Routes } from '@angular/router';

import { WelcomeNoteComponent } from './welcome-note/welcome-note.component';
import { ProfilesComponent } from './profiles/profiles.component';


const appRoutes: Routes = [
  
  { path: 'app-welcome-note', component: WelcomeNoteComponent },
  {
    path: 'app-profiles',
    component: ProfilesComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);