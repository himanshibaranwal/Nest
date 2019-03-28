import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DonateNestComponent } from './DonateNest/DonateNest.component';
import { FooterComponent } from './Footer/Footer.component';
import { NavBarComponent } from './NavBar/NavBar.component';
import { AboutUsComponent } from './AboutUs/AboutUs.component';
import { HowToContributeComponent } from './HowToContribute/HowToContribute.component';
import { LoginComponent } from './login/login.component'
import { ImpactStoriesComponent } from './ImpactStories/ImpactStories.component';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { JoinUsComponent } from './JoinUs/JoinUs.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DonateNestComponent,
    ImpactStoriesComponent,
    LoginComponent,
    FooterComponent,
    HowToContributeComponent,
    AboutUsComponent,
    JoinUsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {
        path: 'AboutUs',
        component: AboutUsComponent
      },
      {
        path: 'HowToContribute',
        component: HowToContributeComponent
      },
      {
        path: 'ImpactStories',
        component: ImpactStoriesComponent
      },
      {
        path: 'DonateNest',
        component: DonateNestComponent
      },
      {
        path: 'login',
        component: LoginComponent,
        // canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'JoinUs',
        component: JoinUsComponent,
        // canActivate: [AuthGuard]
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
