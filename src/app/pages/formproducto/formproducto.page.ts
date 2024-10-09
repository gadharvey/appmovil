import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AddService } from 'src/app/services/add.service';

@Component({
  selector: 'app-formproducto',
  templateUrl: './formproducto.page.html',
  styleUrls: ['./formproducto.page.scss'],
})
export class FormproductoPage implements OnInit {

  constructor(private formbuilder: FormBuilder, private addservices: AddService) { }

  // Define el formulario usando FormBuilder
  formulario = this.formbuilder.group({
    name: this.formbuilder.control("", [Validators.required]),
    stock: this.formbuilder.control("", [Validators.required]),
  });

  // Método para agregar un producto
  async add() {
    if (this.formulario.invalid) return;// Si el formulario no es válido no hace nada
    const { name, stock } = this.formulario.value; 
    if (!name || !stock) return; 

    console.log(this.formulario.value);

    // Llama al servicio para agregar el producto
    await this.addservices.add({ nombre: name, stock: parseInt(stock) });
  }



  ngOnInit() {
  }

}
