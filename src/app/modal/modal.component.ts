import { Component, OnInit } from '@angular/core';
import { MyService, User } from 'src/app/my.service';
import { ModalService } from 'src/app/modal.service';
import { MatDialogRef } from '@angular/material/dialog';
import { CartaoService, TransactionPayload } from 'src/app/cartao.service';


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
  showDisplay:boolean
  constructor(
      private cartaoService:CartaoService,
      public displays: ModalService
    ){ 

   }
  
  ngOnInit(): void {
    this.displays.showNotFound.subscribe((valor) => {
      this.showDisplay = valor
    })
  }
  q = ''
  body:TransactionPayload
  buscaCartao() {

    try {

      this.body = {
        card_number:''+222,
        cvv:parseInt('222'),
        expiry_date:'20/12/2020',
        destination_user_id: 34,
        value:parseFloat('399.99')
      }

    } catch(e) {
      alert('informações invalidas')
    }
    this.cartaoService.search(this.body).toPromise().then((resultado:responseAPI) => { 
      console.log(resultado.status)
    })
  }

  valorModal = false
  showNotFoundModal() {
    console.log(parseFloat(this.q.replace(/\./g,'').replace(/\,/g,'.')))
    this.valorModal = !this.valorModal
    this.displays.mudarValor(this.valorModal)
  }

  maskSearch(event) {
    console.log(event)
    
    if (event.keyCode == 8 && this.q != '') {
      this.q = '';
    }

    if (event.keyCode >= 48 && event.keyCode <= 57) {
      console.log('É numero')
      
      this.q = this.q + event.key 
      this.q = this.q.replace(/\,/gi,'').replace(/(\d{2})$/g, ',$1')
      this.q = this.q.replace(/\./gi,'').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }
  }

  maskSearchDown(event) {
    event.preventDefault();
  }

}
