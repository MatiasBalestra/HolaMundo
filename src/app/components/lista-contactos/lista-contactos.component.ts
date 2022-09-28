import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContacto } from 'src/app/models/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit, OnDestroy {

  // creamos lista de contactos
  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;

  //subscripcion de Servicio

  subscription: Subscription | undefined ;


  // Inyectamos los servicios en el constructor
  constructor(private contactoService:ContactoService) { }

  ngOnInit(): void {

    //Obtener la lista de contactos que nos brinda el servicio

   this.contactoService.obtenerContactos()
   .then((lista: IContacto[]) => this.listaContactos = lista)
   .catch((error) => alert(`Ha habido un error al recuperar la lista de contactos: ${error}`))
   .finally(() => console.log('Peticion de lista de contactos terminada'))

  }

  obtenerContacto(id:number) {
    this.subscription = this.contactoService.obetenerContactoPorId(id)?.subscribe(
      (contacto: IContacto) => this.contactoSeleccionado = contacto)
    }

    ngOnDestroy(): void {
      this.subscription?.unsubscribe;
    }

}
