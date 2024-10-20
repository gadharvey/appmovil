import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  // Inyecta el servicio de autenticación Firebase y crea un formulario
  constructor(private formbuilder: FormBuilder, private authservice: AuthService) { }

  // Definición del formulario con tres campos
  form = this.formbuilder.group({
    name: this.formbuilder.control("", [Validators.required]),
    email: this.formbuilder.control("", [Validators.required, Validators.email]),
    password: this.formbuilder.control("", [Validators.required]),
  });


  ngOnInit() {
  }

  // Función asíncrona que manejar el registro de un nuevo usuario
  async register() {
    if (this.form.invalid) return // Verifica si el formulario es inválido, si no hace nada
    const { email, password, name } = this.form.value; // Extrae los valores del formulario
    if (!email || !password || !name) return; // Verifica si todos los campos están llenos, si no no hace nada

    try {
      const newUser = await this.authservice.register({ email, name, password }); // Llama al servicio de autenticación para registrar un nuevo usuario
      console.log(newUser);

    } catch (error) {
      console.log(error);
    }
  }



}
