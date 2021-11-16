import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../services/github.service';
import { CommitBase } from '../_shared/models/responses/Commit';

@Component({
  selector: 'app-repo-changes',
  templateUrl: './repo-changes.component.html',
  styleUrls: ['./repo-changes.component.scss'],
})
export class RepoChangesComponent implements OnInit {
  commits!: CommitBase[];
  reponame!: string;
  username!: string;

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const nameTemp = params.get('username');
      const repoTemp = params.get('repo');

      this.username = nameTemp == null ? '00000' : nameTemp;
      this.reponame = repoTemp == null ? '00000' : repoTemp;

      this.githubService
        .getCommitsByRepo(this.username, this.reponame)
        .subscribe((data) => {
          console.log(data);
          this.commits = data;
        });
    });
  }
}
