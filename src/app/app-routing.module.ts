import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/idea-list/idea-list.module').then( m => m.IdeaListPageModule)
  },
  {
    path: 'idea',
    loadChildren: () => import('./pages/idea-details/idea-details.module').then( m => m.IdeaDetailsPageModule)
  },
  {
    path: 'idea/:id',
    loadChildren: () => import('./pages/idea-details/idea-details.module').then( m => m.IdeaDetailsPageModule)
  },
  {
    path: 'phone-auth',
    loadChildren: () => import('./pages/phone-auth/phone-auth.module').then( m => m.PhoneAuthPageModule)
  },
  {
    path: 'social-auth',
    loadChildren: () => import('./pages/social-auth/social-auth.module').then( m => m.SocialAuthPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
