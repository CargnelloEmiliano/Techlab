import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'C:/Program Files/Git/sign-in', loadChildren: () => import('./layout/login/sign-in/sign-in.module').then(m => m.SignInModule) }, { path: 'C:/Program Files/Git/sign-up', loadChildren: () => import('./layout/login/sign-up/sign-up.module').then(m => m.SignUpModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
