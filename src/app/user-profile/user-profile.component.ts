import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../services/github.service';
import { Repo } from '../_shared/models/responses/Repo';
import { UserProfile } from '../_shared/models/responses/UserProfile';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userData!: UserProfile;
  repoData!: Repo[];

  constructor(
    private githubService: GithubService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const temp = params.get('username');
      let userName: string = temp == null ? '00000' : temp;

      this.githubService.getUser(userName).subscribe((data) => {
        this.userData = data;
      });

      this.githubService.getReposByUser(userName).subscribe((data) => {
        this.repoData = data;
      });
    });
  }
}
