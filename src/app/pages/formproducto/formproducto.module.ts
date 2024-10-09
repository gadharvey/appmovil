import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormproductoPageRoutingModule } from './formproducto-routing.module';

import { FormproductoPage } from './formproducto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormproductoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormproductoPage]
})
export class FormproductoPageModule {}
