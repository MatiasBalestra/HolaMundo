import { Injectable } from '@angular/core';


// Importamos la lista de contactos MOCK
import { CONTACTOS } from 'src/mocks/contactos.mock';
import { IContacto } from '../models/contacto.interface';

// Importamos Observables de rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContactoService {

  constructor() { }


  obtenerContactos(): Promise<IContacto[]> {
    return Promise.resolve(CONTACTOS);
  }

  obetenerContactoPorId(id: number): Observable<IContacto> | undefined {

    const contacto = CONTACTOS.find((contacto: IContacto) => contacto.id === id);

    // Creamos un observable

    let observable: Observable<IContacto> = new Observable(observer => {
      observer.next(contacto); // Emitir un valor a todo componente subscrito
      observer.complete(); // No emitimos más valores
    }
    )


    if (contacto){
      return observable;
    } else {
      return;
    }

  }




}

