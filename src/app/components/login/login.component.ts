// import { Component } from '@angular/core';
// import { FormControl, Validators } from '@angular/forms';
// import { AuthService } from '../services/auth.service';
// import { SessionService } from '../services/session.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   hide = true;
//   email = new FormControl('', [Validators.required, Validators.email]);

//   form: any = {
//     username: null,
//     password: null
//   };
//   isLoggedIn = false;
//   isLoginFailed = false;
//   errorMessage = '';
//   roles: string[] = [];

//   constructor(private authService: AuthService, private sessionService: SessionService) { }

//   ngOnInit(): void {
//     if (this.sessionService.isLoggedIn()) {
//       this.isLoggedIn = true;
//       this.roles = this.sessionService.getUser().roles;
//     }
//   }

//   onSubmit(): void {
//     const { username, password } = this.form;

//     this.authService.login(username, password).subscribe({
//       next: data => {
//         this.sessionService.saveUser(data);

//         this.isLoginFailed = false;
//         this.isLoggedIn = true;
//         this.roles = this.sessionService.getUser().roles;
//         this.reloadPage();
//       },
//       error: err => {
//         this.errorMessage = err.error.message;
//         this.isLoginFailed = true;
//       }
//     });
//   }

//   reloadPage(): void {
//     window.location.reload();
//   }
//   getErrorMessage() {
//     if (this.email.hasError('required')) {
//       return 'You must enter a value';
//     }

//     return this.email.hasError('email') ? 'Not a valid email' : '';
//   }
// }

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( public authService: AuthService) { }

  ngOnInit() { }
}
