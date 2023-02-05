import { Component } from '@angular/core';
// import { AuthService } from './services/auth.service';
// import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';
  // private roles: string[] = [];
  // isLoggedIn = false;
  // username?: string;

  // constructor(private sessionService: SessionService, private authService: AuthService) { }

  // ngOnInit(): void {
  //   this.isLoggedIn = this.sessionService.isLoggedIn();

  //   if (this.isLoggedIn) {
  //     const user = this.sessionService.getUser();
  //     this.roles = user.roles;

  //     this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
  //     this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

  //     this.username = user.username;
  //   }
  // }

  // logout(): void {
  //   this.authService.logout().subscribe({
  //     next: res => {
  //       console.log(res);
  //       this.sessionService.clean();

  //       window.location.reload();
  //     },
  //     error: err => {
  //       console.log(err);
  //     }
  //   });
  // }
}
