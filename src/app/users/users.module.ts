import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [CommonModule, UsersRoutingModule],
  exports: [LoginComponent, SignupComponent],
})
export class UsersModule {}
