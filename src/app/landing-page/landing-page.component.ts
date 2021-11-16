import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { User, UsersResponse } from '../_shared/models/responses/UserResponse';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  username = 'Vernon';
  loadedUsers: boolean = false;
  users: User[] = [];
  constructor(private githubService: GithubService) {}

  ngOnInit(): void {}

  search() {
    this.githubService.searchUsers(this.username).subscribe(
      (data) => {
        this.users = [];
        console.log(data);
        this.loadedUsers = true;
        this.users = data.items;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
