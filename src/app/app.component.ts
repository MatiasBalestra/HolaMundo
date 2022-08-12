import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Rusher';
  usuario = 'Rusher Sama';



/* Esta funcion se ejecutará cuando en el Hijo (Saludo Component) se pulse un botón */


  recibirMensajeDelHijo(evento: string){
    alert(evento);
  }

  recibirMensajeDelHijo2(evento: string){
    alert(evento + "chupame el poto");

  }

}
