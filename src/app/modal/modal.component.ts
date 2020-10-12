import { Component, OnInit } from '@angular/core';
import { MyService, User } from 'src/app/my.service';
import { ModalService } from 'src/app/modal.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { CartaoService } from 'src/app/cartao.service';


interface responseAPI {
  status:string,
  success:boolean
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  usuarioselecao: any;
  showDisplay:boolean = false
  constructor(
      public myService:MyService,
      private cartaoService:CartaoService,
      public displays: ModalService
    ){ 

   }
   
  cartoes = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18'
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20'
    }
  ]; 

  
  
  ngOnInit(): void {
    
    this.displays.showNotFound.subscribe((valor) => {
      console.log("subscribe", valor);
      this.showDisplay = valor
    })
  };
 
  // body:TransactionPayload
  
  

  valorModal = false
  showNotFoundModal() {
    console.log(parseFloat(this.q.replace(/\./g,'').replace(/\,/g,'.')))
    this.valorModal = !this.valorModal
    this.displays.mudarValor(this.valorModal)
  }
  
  q: any;
  
  maskSearch(event) {

    if (event.keyCode == 8 && this.q != "") {
      this.q = "";
    }

    if (this.q == undefined) {
      this.q ="";
    }

    if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 105) {
      console.log('Um numero')

      this.q = this.q + event.key;
      this.q = this.q.replace(/\,/gi,'').replace(/(\d{2})$/g, ',$1');
      this.q = this.q.replace(/\./gi,'').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
      console.log(this.q)
    }
  }

  maskSearchDown(event) {
    event.preventDefault();
  }

}
