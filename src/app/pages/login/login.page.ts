import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';// Para construir y validar formularios
import { Router } from '@angular/router'; // Para manejar la navegacion entre paginas
import { AuthService } from 'src/app/services/auth.service'; // Servicio de autenticación

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //Para crear y manejar el formulario,servicio de autenticacion y la navegacion de paginas
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { } 

  // Define el formulario con los campos de email y password
  form = this.formBuilder.group({
    email: this.formBuilder.control("", [Validators.required, Validators.email]),
    password: this.formBuilder.control("", [Validators.required]),
  });


  ngOnInit() {
  }

   // Método para hacer login
   
  async login() {
    if (this.form.invalid) return // Si el formulario es invalido,no se hace nada
    const { email, password } = this.form.value; // Obtenemos los valores del formulario
    if (!email || !password) return 

    try {
      const user = await this.authService.login({ email, password }); // intenta hacer login con el servicio
      console.log(user); 

      this.router.navigateByUrl('/home'); // Si el login es exitoso te redirige a la pagina de inicio


    } catch (error) {
      console.log(error); //si hay error muestra en la consola
    }

  }


  // metodo para hacer login con Google
  async loginWithGoogle() {
    try {
      const user = await this.authService.loginWithGoogle(); // intenta hacer login con google
      console.log(user);

      this.router.navigateByUrl('/home');

    } catch (error) {
      console.log(error);
    }
  }

}
