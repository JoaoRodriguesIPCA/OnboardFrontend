import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { ForbiddenComponent } from './error-pages/forbidden/forbidden.component';
import { EditUserComponent } from './profile/edit-user/edit-user.component';
import { ProfileComponent } from './profile/profile.component';
import { EditTransactionComponent } from './transactions/edit-transaction/edit-transaction.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'editTransaction/:id', component: EditTransactionComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'editprofile/:id', component: EditUserComponent },
  { path: '404', component: NotFoundComponent },
  { path: '500', component: InternalServerComponent },
  { path: '403', component: ForbiddenComponent },
  { path: '**', redirectTo: '/404' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
