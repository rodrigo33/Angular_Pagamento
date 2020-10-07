import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id:  number;
  name: string;
  img: string;
  username: string;

}

@Injectable({
  providedIn: 'root'
})
export class MyService {

    usuarioselecao: any;

  public getUsuarioselecao(){
    return this.usuarioselecao;
  }

  public setUsuarioselecao(avaliable){
    this.usuarioselecao = avaliable;
  }

  private apiurl = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce';

  constructor(private http: HttpClient) { }

  getUsuario(){
    return this.http.get(this.apiurl);
  }
}

export {User}
