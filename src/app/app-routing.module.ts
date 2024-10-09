import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    canActivate: [AuthGuard()],
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  
  {
    canActivate: [AuthGuard()],
    path: 'formproducto',
    loadChildren: () => import('./pages/formproducto/formproducto.module').then( m => m.FormproductoPageModule)
  },
  {
    path: 'editar',
    loadChildren: () => import('./pages/editar/editar.module').then( m => m.EditarPageModule)
  },
  
  
  
  
  
  
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
