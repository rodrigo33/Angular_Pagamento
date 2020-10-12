import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/* interface TransactionPayload {
  card_number:string,
  cvv:number,
  expiry_date:string,
  destination_user_id: number,
  value: number
} */


@Injectable({
  providedIn: 'root'
})
export class CartaoService {



  constructor(

    private httpService: HttpClient
  ) { }

  search(cartoes){
    let endpoint = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989'

    return this.httpService.post(endpoint, cartoes)
		.subscribe(
      resultado => {
        console.log(resultado)
      },
      erro => {
        if(erro.status == 400) {
          console.log(erro);
        }
      }
  );
  }
}

/* export {TransactionPayload} */