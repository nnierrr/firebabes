import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdeaListPage } from './idea-list.page';

const routes: Routes = [
  {
    path: '',
    component: IdeaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdeaListPageRoutingModule {}
