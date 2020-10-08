import { Component, OnInit } from '@angular/core';
import { MyService, User } from 'src/app/my.service';
import { ModalService } from 'src/app/modal.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  showDisplay:boolean
  constructor(
      public displays: ModalService
    ){ 

   }
  
  ngOnInit(): void {
    this.displays.showNotFound.subscribe((valor) => {
      this.showDisplay = valor
    })
  }

 /*  cancel() {
    this.dialogRef.close();
  } */

}
