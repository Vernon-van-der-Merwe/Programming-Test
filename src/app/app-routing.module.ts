import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RepoChangesComponent } from './repo-changes/repo-changes.component';
import { UserChangesComponent } from './user-changes/user-changes.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'user/:username', component: UserProfileComponent },
  { path: 'changes/:username/:repo', component: RepoChangesComponent },
  { path: 'user-changes/:username', component: UserChangesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
