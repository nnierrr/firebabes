import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialAuthPage } from './social-auth.page';

const routes: Routes = [
  {
    path: '',
    component: SocialAuthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialAuthPageRoutingModule {}
