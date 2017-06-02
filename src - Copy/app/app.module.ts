import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import {PopupModule} from 'ng2-opd-popup';



import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { HeaderComponent } from './header/header.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { RightnavComponent } from './rightnav/rightnav.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeNoteComponent } from './welcome-note/welcome-note.component';
import { HeaderImagesComponent } from './header-images/header-images.component';
import { ProfilesComponent } from './profiles/profiles.component';

import { routing }        from './app.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PopupformsComponent } from './popupforms/popupforms.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { LinkdemoComponent } from './linkdemo/linkdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    HeaderComponent,
    LeftnavComponent,
    RightnavComponent,
    FooterComponent,
    WelcomeNoteComponent,
    HeaderImagesComponent,
    ProfilesComponent,
    LoginComponent,
    RegisterComponent,
    PopupformsComponent,
    AboutusComponent,
    ContactusComponent,
    ProjectsComponent,
    HomeComponent,
    LinkdemoComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    PopupModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
