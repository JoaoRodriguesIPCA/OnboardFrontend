import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from "./material.module";
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NewTransactionComponent } from './transactions/new-transaction/new-transaction.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { PastTransactionsComponent } from './transactions/past-transactions/past-transactions.component';
import { EditTransactionComponent } from './transactions/edit-transaction/edit-transaction.component';
import { ProfileComponent } from './profile/profile.component';
import { AddUserComponent } from './profile/add-user/add-user.component';
import { UserListComponent } from './profile/user-list/user-list.component';
import { EditUserComponent } from './profile/edit-user/edit-user.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TransactionsComponent,
    NewTransactionComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    PastTransactionsComponent,
    EditTransactionComponent,
    ProfileComponent,
    AddUserComponent,
    UserListComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
