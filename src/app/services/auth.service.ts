import { Injectable } from '@angular/core'; // para marcar la clase como un servicio inyectable 
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, user, authState } from '@angular/fire/auth';
import { Observable } from 'rxjs'; // Importa Observable para manejar el estado de autenticación

// Define de la interfaz User para los datos de login
export interface User{
  email: string;
  password: string;
}

// Extiende la interfaz User para incluir el nombre en el registro
export interface UserRegister extends User{
  name: string;
  
}

@Injectable({
  providedIn: 'root'
})
export class  AuthService {
  
  constructor(private auth :Auth) { } // Inyecta el servicio de autenticación Firebase

  // Método para hacer login con email y contraseña
  async login(user: User){
    const usuario = signInWithEmailAndPassword(this.auth,user.email,user.password);
    return usuario // Devuelve el usuario autenticado
  }

  // Método para registrar un nuevo usuario con email y contraseña
  async register(user: UserRegister){
    const usuario = await createUserWithEmailAndPassword(this.auth,user.email,user.password);
    return usuario;
  }

  // Método para hacer login usando Google
  async loginWithGoogle(){
    const provider = new GoogleAuthProvider(); // Proveedor de autenticación de Google

    const user = await signInWithPopup(this.auth,provider); // Inicia sesión 
    return user;
  } 

  // Método para obtener el estado actual de autenticación 
  get authState$(): Observable<any>{
    return authState(this.auth); //Devuelve un observable que emite el estado de autenticación
  }

  // Método para cerrar sesión
  async logout(){
    await this.auth.signOut(); // Cierra sesión del usuario actual
  }

}