import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdeaDetailsPage } from './idea-details.page';

const routes: Routes = [
  {
    path: '',
    component: IdeaDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdeaDetailsPageRoutingModule {}
