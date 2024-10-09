import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormproductoPage } from './formproducto.page';

const routes: Routes = [
  {
    path: '',
    component: FormproductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormproductoPageRoutingModule {}
