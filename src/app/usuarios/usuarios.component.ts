import { Component, OnInit } from '@angular/core';

import { MyService, User } from 'src/app/my.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  

  constructor(private myService:MyService) { }


  resultados:any=[];
  buscaUsuario(){
    this.myService.getUsuario().subscribe(resultado => {
      console.log(resultado)
      this.resultados = resultado;
    })
  }

  ngOnInit(): void {
    this.buscaUsuario()
  }

}
