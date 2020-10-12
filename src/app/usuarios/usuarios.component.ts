import { Component, OnInit } from '@angular/core';
import { MyService, User } from 'src/app/my.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/modal/modal.component';
import { ModalService } from 'src/app/modal.service';
import { CartaoService } from 'src/app/cartao.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  constructor(
    
    public displays: ModalService,
    private myService:MyService) { }

  resultados:any=[];
  buscaUsuario(){
    this.myService.getUsuario().subscribe(resultado => {
      console.log(resultado)
      this.resultados = resultado;
    })
  }
  

  valorModal = false
  showNotFoundModal() {
    console.log("shownotfound");
    this.valorModal = !this.valorModal
    this.displays.mudarValor(this.valorModal)
  }


  ngOnInit(): void {
    this.buscaUsuario()
  }
}
