import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ShowuserComponent } from './components/showuser/showuser.component';
// import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'; // Optional

const routes: Routes = [
  { path: "", component: HomeComponent }, // Default home page
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "showuser", component: ShowuserComponent },

  // Optional: Catch unknown routes and redirect to a 404 page
  // { path: "**", component: PageNotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
