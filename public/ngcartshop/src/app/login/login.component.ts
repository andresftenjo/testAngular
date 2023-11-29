import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { LoginService } from '../services/login.service';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;
  username = new FormControl('');
  password = new FormControl('');

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe(
        (response: any) => {
          console.log('Login successful', response);
          // Handle response here
        },
        (error: any) => {
          console.log('Login failed', error);
          // Handle error here
        }
      );
    }
  }
}
