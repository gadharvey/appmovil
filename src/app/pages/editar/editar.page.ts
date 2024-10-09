import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddService, Producto } from 'src/app/services/add.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  productoId: string | undefined;  // Variable para almacenar el ID del producto
  
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private addService: AddService,
    private router: Router
  ) { }

  formulario = this.formBuilder.group({
    nombre: this.formBuilder.control("", [Validators.required]),
    stock: this.formBuilder.control("", [Validators.required]) // Ajusta el tipo de stock a número
  });
  

  async ngOnInit() {
    this.productoId = this.route.snapshot.paramMap.get('id')??undefined; // Obtiene la ID del producto desde la ruta
    if (this.productoId) {
      const producto = await this.addService.obtenerProductoPorId(this.productoId);
      if (producto) {
        this.formulario.setValue({
          nombre: producto.nombre,
          stock: producto.stock.toString(),
        });
      }
    }
  }

  // Método para actualizar el producto
  async actualizar() {
    if (this.formulario.invalid) return;
    const { nombre, stock } = this.formulario.value;
    if (!nombre || !stock) return;

    if (this.productoId) {
      await this.addService.actualizarProducto(this.productoId, {
        nombre: nombre,
        stock: parseInt(stock),
      });
      this.router.navigate(['/home']); // Redirige a la página de inicio después de la actualización
    }
  }

  // Método para guardar los cambios del producto editado
  async editarProducto() {
    if (this.formulario.invalid) return;

    const { nombre, stock } = this.formulario.value;

    if (!nombre || !stock) return;

    // Convertir el valor del stock a número
    const stockNumber = parseInt(stock as string, 10);

    if (isNaN(stockNumber)) {
      console.error("El stock debe ser un número válido.");
      return;
    }

    // Actualizar el producto con los datos nuevos
    await this.addService.actualizarProducto(this.productoId!, {
      nombre: nombre as string,
      stock: stockNumber  // Asigna el valor numérico convertido
    });

    // Navegar de vuelta a la página de productos
    this.router.navigateByUrl('/home');
  }

}
