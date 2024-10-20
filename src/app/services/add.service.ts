import { Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, Firestore, getDoc, getDocs, updateDoc } from '@angular/fire/firestore'; // Importa funciones de Firestore
// Define la interfaz Producto
export interface Producto {
  
  nombre: string;
  stock: number;
}


@Injectable({
  providedIn: 'root'
})
export class AddService {




  constructor(private firestore: Firestore) { } // Inyecta el servicio de Firestore

  // Método para agregar un nuevo producto a la colección 'producto'
  async add(data: Producto) {
    const ref = collection(this.firestore, 'producto') // Obtiene la referencia a la colección 'producto'
    await addDoc(ref, data) // Agrega un nuevo documento con los datos del producto
  }
  

  // Método para mostrar todos los productos de la colección 'producto'
  async mostrar() {
    const ref = collection(this.firestore, 'producto') // Obtiene la referencia a la colección 'producto'
    const producto = await getDocs(ref) // Obtiene todos los documentos de la colección
    const mostrar = producto.docs.map(producto => producto.data()); // Mapea los documentos a un array con los datos
    

    const Id = producto.docs.map((p) => {
      return { pId: p.id, ...p.data() }
    })

    console.log("id", producto.docs.map((p) => {
      return { pId: p.id, ...p.data() }
    }));

    console.log("LISTA ------------>>>", mostrar);
    
    return Id
  }

  //metodo para capturar el id de producto
  async obtenerProductoPorId(id: string) {
    const docRef = doc(this.firestore, 'producto', id);
    const docSnap = await getDoc(docRef);
    return docSnap.data() as Producto;
  }

  // metodo para actualizar un producto
  async actualizarProducto(id: string, data: Partial<Producto>) {
    const docRef = doc(this.firestore, 'producto', id);
    return updateDoc(docRef, data);
  }

  
  // metodo para borrar un producto
  async borrarProducto(id: string) {
    const docRef = doc(this.firestore, 'producto', id);
    await deleteDoc(docRef);
  }

}
