import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RepoChangesComponent } from './repo-changes/repo-changes.component';
import { UserChangesComponent } from './user-changes/user-changes.component';

@NgModule({
  declarations: [AppComponent, LandingPageComponent, UserProfileComponent, RepoChangesComponent, UserChangesComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
