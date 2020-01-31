import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdeaListPageRoutingModule } from './idea-list-routing.module';

import { IdeaListPage } from './idea-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdeaListPageRoutingModule
  ],
  declarations: [IdeaListPage]
})
export class IdeaListPageModule {}
