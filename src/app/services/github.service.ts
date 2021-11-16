import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommitBase } from '../_shared/models/responses/Commit';
import { Repo } from '../_shared/models/responses/Repo';
import { UserProfile } from '../_shared/models/responses/UserProfile';
import { UsersResponse } from '../_shared/models/responses/UserResponse';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  searchUsers(search: string): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(
      `https://api.github.com/search/users?q=${search}`
    );
  }

  getReposByUser(user: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(`https://api.github.com/users/${user}/repos`);
  }

  getCommitsByRepo(user: string, repo: string): Observable<CommitBase[]> {
    return this.http.get<CommitBase[]>(
      `https://api.github.com/repos/${user}/${repo}/commits`
    );
  }

  getUser(username: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(
      `https://api.github.com/users/${username}`
    );
  }

  getUserChanges(username: string) {
    return this.http.get<UserProfile>(
      `https://api.github.com/users/${username}`
    );
  }
}
