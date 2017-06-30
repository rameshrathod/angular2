import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { HeaderComponent } from './header/header.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { RightnavComponent } from './rightnav/rightnav.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeNoteComponent } from './welcome-note/welcome-note.component';
import { HeaderImagesComponent } from './header-images/header-images.component';
import { ProfilesComponent } from './profiles/profiles.component';

//for fake backend
import { fakeBackendProvider } from './_helper/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { UrlnavigationshowService } from './urlnavigationshow.service';
import {AuthenticateService } from './services/authenticate.service';
import { AlertService } from './services/alert.service';
import { AuthGuard } from './_guards/auth.guard';


import { User } from './_models/user';
import { UserService } from './services/user.service';

import { routing }        from './app.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PopupformsComponent } from './popupforms/popupforms.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { LinkdemoComponent } from './linkdemo/linkdemo.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { UserComponent } from './user/user.component';
import { AlertComponent } from './alert/alert.component';


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
    LinkdemoComponent,
    NavigatorComponent,
    UserComponent,
    AlertComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
  UrlnavigationshowService,
  AuthenticateService,
  AlertService,
  fakeBackendProvider,
  MockBackend,
  UserService,
  BaseRequestOptions,
  AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
