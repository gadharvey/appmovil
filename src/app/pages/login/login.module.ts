import { NgModule } from '@angular/core'; // Permite crear módulos en Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Módulos para manejar formularios

import { IonicModule } from '@ionic/angular'; // Proporciona componentes visuales de Ionic

import { LoginPageRoutingModule } from './login-routing.module'; // Define las rutas para la página

import { LoginPage } from './login.page'; // Componente que representa la página de login
import { RouterLink } from '@angular/router'; // Permite navegar entre páginas

@NgModule({ 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    RouterLink // Navegación entre páginas

  ],
  declarations: [LoginPage] // Declar que este módulo tiene la página de login
})
export class LoginPageModule {} // Exporta el módulo para ser usado en la app
