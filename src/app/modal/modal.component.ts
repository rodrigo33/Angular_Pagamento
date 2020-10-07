import { Component, OnInit } from '@angular/core';
import { MyService, User } from 'src/app/my.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    
    public dialogRef: MatDialogRef<ModalComponent>) { }

  ngOnInit(): void {
  }

  cancel() {
    this.dialogRef.close();
  }

}
