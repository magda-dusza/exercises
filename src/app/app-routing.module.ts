import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HintComponent } from './hint/hint.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'hint', component: HintComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
