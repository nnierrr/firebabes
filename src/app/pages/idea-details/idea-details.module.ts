import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdeaDetailsPageRoutingModule } from './idea-details-routing.module';

import { IdeaDetailsPage } from './idea-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdeaDetailsPageRoutingModule
  ],
  declarations: [IdeaDetailsPage]
})
export class IdeaDetailsPageModule {}
