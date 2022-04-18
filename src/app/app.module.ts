import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersModule } from './users/users.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FilesizePipe } from './filesize.pipe';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CutomStyleDirective } from './cutom-style.directive';
import { HttpClientModule } from '@angular/common/http';
import { DataModelExampleComponent } from './data-model-example/data-model-example.component';
import { UsersRoutingModule } from './users/users-routing.module';
import { LazyComponentOneComponent } from './lazy-component-one/lazy-component-one.component';
import { LazyComponentTwoComponent } from './lazy-component-two/lazy-component-two.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent,
    FilesizePipe,
    AdminComponent,
    PageNotFoundComponent,
    CutomStyleDirective,
    DataModelExampleComponent,
    LazyComponentOneComponent,
    LazyComponentTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    HttpClientModule,
    UsersRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
