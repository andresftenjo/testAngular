import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [],
  imports: [MaterialModule, MatInputModule, MatButtonModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: []
})
export class AppModule {}