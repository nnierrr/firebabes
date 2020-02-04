import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialAuthPageRoutingModule } from './social-auth-routing.module';

import { SocialAuthPage } from './social-auth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialAuthPageRoutingModule
  ],
  declarations: [SocialAuthPage]
})
export class SocialAuthPageModule {}
