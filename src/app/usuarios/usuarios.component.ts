import { Component, OnInit } from '@angular/core';

import { MyService, User } from 'src/app/my.service';

import { MatDialog } from '@angular/material/dialog';

import { ModalComponent } from 'src/app/modal/modal.component';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  

  constructor(
    
    public dialog:MatDialog,
    private myService:MyService) { }


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

  openDialog(item){
    console.log(item)
      this.myService.setUsuarioselecao(item);
      const dialogRef = this.dialog.open(ModalComponent,{
        width: '60%',
        height: '60%',
      });

  dialogRef.afterClosed().subscribe(result =>{
    console.log('fechado');
  })    

  }

}
