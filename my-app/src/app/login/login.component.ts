import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login = {
    username: '',
    password: ''
  };

  constructor(private loginService: LoginService, private router: Router) {}

  getFashion() {
    this.loginService.loginUser(this.login).subscribe(
      (response: any) => {
        console.log('Login successful', response);
        this.router.navigate(['/fashion-list']);
      },
      (error: any) => {
        console.error('Login failed', error);
        alert('Invalid username or password');
      }
    );
  }
}
