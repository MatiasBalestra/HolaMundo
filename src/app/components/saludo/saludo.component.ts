import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit, OnChanges, OnDestroy {

  @Input() nombre: string = "Anonimo :V";


  /* Primer paso creo el output y mensaje emiter */
  @Output() mensajeEmitter1: EventEmitter<string> = new EventEmitter<string>();

  @Output() mensajeEmitter2: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }


  ngOnInit(): void {
    // instrucciones previas a la renderizacion del componente
    console.log("ngOnInit del componente Saludo")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges el componente recibe cambio ANTERIOR", changes['nombre'].currentValue);

    console.log("ngOnChanges el componente recibe CAMBIO NUEVO", changes['nombre'].currentValue);
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy el componente va desaparecer");
  }


  /*
  * Ejemplo para gestionar un evento de tipo click en el DOM y enviar un texto al componente padre
  */


  /* Creo la funcion para mandar al padre el mensaje desde el hijo */
  enviarMensajeAlPadre(): void {
    /* alert(`Hola, ${this.nombre}, Alerta disparada desde un click de botón`); */
    this.mensajeEmitter1.emit(`Hola, ${this.nombre}, Alerta disparada desde un click de botón`);
  }

  enviarMensajeAlPadre2(): void {
    /* alert(`Hola, ${this.nombre}, Alerta disparada desde un click de botón`); */
    this.mensajeEmitter2.emit(`Hola, ${this.nombre}, Alerta disparada desde un click de botón soy el dos pa`);
  }

}

// Orden del ciclo de vida de los componentes:

// * 1. ngOnChanges
// * 2. ngOnInit


//   3. ngAfterContentInit
//   4. ngAfterContentChecked
//   5. ngAfterViewInit
//   6. ngAfterViewChecked
//   7. ngAfterContentChecked
//   8. ngAfterViewChecked


// * 9. ngOnDestroy

