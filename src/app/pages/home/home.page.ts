import { Component, OnInit } from '@angular/core';
import { doc, updateDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AddService, Producto } from 'src/app/services/add.service'; // Servicio para manejar productos
import { AuthService } from 'src/app/services/auth.service'; // Servicio para manejar la autenticación

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, private authService: AuthService, private addService: AddService) { }

  
  productos: any;

  // Método para que se inicialice el componente
  async ngOnInit() {
    await this.mostrar(); // Llama al método mostrar para cargar los productos
  }



  // Método para cerrar sesión
  async logout() {
    await this.authService.logout(); // Llama al servicio de autenticación para cerrar sesión
    this.router.navigateByUrl('/login'); // Redirige a la página de login
  }

  // Método para mostrar los productos
  async mostrar() {
    const producto = await this.addService.mostrar(); // Llama al servicio para obtener la lista de productos
    console.log(producto);

    this.productos = producto; // Asigna la lista de productos a la propiedad productos
  }


  //editar

  editarProducto(id: string , ) {
    if (id) {
      this.router.navigate(['/editar'], {
        queryParams: {
          id
        }
      }); // Solo navega si el id no es undefined
    } else {
      console.error("El ID del producto es undefined.");
    }
  }

  //borrar

  borrarProducto(id: string  ) {
    // Llama al servicio para borrar el producto con el ID proporcionado
    this.addService.borrarProducto(id).then(() => {
      // Si la eliminación es exitosa, se imprime un mensaje en la consola
      console.log('Producto eliminado con éxito');

      // Llama al método mostrar() para recargar la lista de productos después de la eliminación
      this.mostrar(); 
    }).catch(error => {
      console.error('Error al eliminar el producto: ', error);
    });
  }


  
}
