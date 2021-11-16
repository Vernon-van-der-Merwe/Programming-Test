import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-user-changes',
  templateUrl: './user-changes.component.html',
  styleUrls: ['./user-changes.component.scss'],
})
export class UserChangesComponent implements OnInit {
  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService;
  }
}
