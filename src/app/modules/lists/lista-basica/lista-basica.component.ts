import { Component, OnInit } from '@angular/core';

// Creamos un tipo base para el ejemplo
export type Producto = {
  nombre:string;
  precio: number;
  descripcion: string;

}






@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.scss']
})
export class ListaBasicaComponent implements OnInit {

  listaElementos: Producto[] = [
    {
      nombre: 'Leche',
      precio: 500,
      descripcion: 'Esto es una leche'
    },
    {
      nombre: 'Carne',
      precio: 300,
      descripcion: 'Esto es una Carne'
    }
  ];

  cargando: boolean = true;
  opcion: number = 0;


  constructor() { }

  ngOnInit(): void {


  }


  cambiarCargando(){
    this.cargando = !this.cargando;
  }


  escojerOpcion(opcionEscogida:number) {
    this.opcion = opcionEscogida;
  }



}
