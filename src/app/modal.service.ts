import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  showNotFound:Observable<boolean>

  constructor() { 
    this.showSubject = new Subject<boolean>();
    this.showNotFound = this.showSubject.asObservable();
    this.showSubject.next(false)
  }
  private showSubject: Subject<boolean>
	
  mudarValor(valor){
    console.log("nextteste")
    this.showSubject.next(valor)
    return valor
  }

  getshowNotFound(){
    return this.showNotFound
  }

  
}
