import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpFromComponent } from './Components/sign-up-from/sign-up-from.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './Components/employee/employee.component';


const MaterialUI=[
  MatInputModule
]

@NgModule({
  declarations: [
    AppComponent,
    SignUpFromComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUI,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [MaterialUI],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
