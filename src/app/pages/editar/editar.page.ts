import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddService } from 'src/app/services/add.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  productoId: string | undefined;  // Variable para almacenar el ID del producto

  constructor(
    private activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private addService: AddService,
    private router: Router
  ) { }

  formulario = this.formBuilder.group({
    nombre: this.formBuilder.control("", [Validators.required]),
    stock: this.formBuilder.control("", [Validators.required]) 
  });


  async ngOnInit() {
    this.activateRoute.queryParams.subscribe(param => {
      // Verifica si existe un parámetro de consulta llamado "id"
      if (param["id"]) {
        // Si "id" existe, se asigna su valor a la propiedad productoId
        this.productoId = param["id"]
      }
    })


  }

  async actualizar() {
    if (this.formulario.invalid) return;
    const { nombre, stock } = this.formulario.value;  // Desestructura los valores del formulario
    if (!nombre || !stock) return;
    if (!this.productoId) return


    // Llama al servicio para actualizar el producto con el ID y los nuevos datos
    await this.addService.actualizarProducto(this.productoId, {
      nombre: nombre,
      stock: parseInt(stock),
    });
    this.formulario.reset()
    this.router.navigate(['/home']); // Redirige a la página de inicio después de la actualización
  }
  
}
