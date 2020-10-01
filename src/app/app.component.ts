import { Component } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pagamento';
  
  constructor(private myService:MyService){

  }

  ngOnInit(){
    /* this.myService.getUsuario().subscribe((usuario) => {
      console.log("Usuários:", usuario); */
    //})  
  }

}

