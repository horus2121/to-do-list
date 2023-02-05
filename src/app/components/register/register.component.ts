// import { Component } from '@angular/core';
// import { FormControl, Validators } from '@angular/forms';
// import { AuthService } from '../services/auth.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   hide = true;
//   email = new FormControl('', [Validators.required, Validators.email]);

//   form: any = {
//     username: null,
//     email: null,
//     password: null
//   };
//   isSuccessful = false;
//   isSignUpFailed = false;
//   errorMessage = '';

//   constructor(private authService: AuthService) { }

//   ngOnInit(): void {
//   }

//   onSubmit(): void {
//     const { username, email, password } = this.form;

//     this.authService.register(username, email, password).subscribe({
//       next: data => {
//         console.log(data);
//         this.isSuccessful = true;
//         this.isSignUpFailed = false;
//       },
//       error: err => {
//         this.errorMessage = err.error.message;
//         this.isSignUpFailed = true;
//       }
//     });
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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor( public authService: AuthService) { }

  ngOnInit() { }
}