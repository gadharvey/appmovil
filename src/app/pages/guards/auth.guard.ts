import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { map } from "rxjs";
import { AuthService } from "src/app/services/auth.service";


// Define la guardia de autenticación como una función que retorna una función de activación
export const AuthGuard = (): CanActivateFn =>{



    return () =>{
        const router = inject(Router); 
        const authService = inject(AuthService); 


        // Observa el estado de autenticación del usuario
        return authService.authState$.pipe(map((state =>{
            if (!state){ // Si el estado es falso,el usuario no está autenticado
                router.navigateByUrl('/login');
                return false;
            }
            return true; // Si el usuario está autenticado, permite la activación
        })));
    }


};