import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatDialogRef } from '@angular/material/dialog';

import { Temple } from '../../../../models/Temple';
@Component({
  selector: 'app-temple-body-dialog-edit',
  templateUrl: './temple-body-dialog-edit.component.html',
  styleUrls: ['./temple-body-dialog-edit.component.css']
})
export class TempleBodyDialogEditComponent implements OnInit {

  templesForm = this.fb.group({
    location: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(14)]],
    builders: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(14)]],
  });

  constructor(@Inject(MAT_DIALOG_DATA) public temple: Temple, private fb: FormBuilder,
              public dialogRef: MatDialogRef<TempleBodyDialogEditComponent>) { }

  ngOnInit(): void {
  }

  close(isEdit: boolean) {
    
    if(isEdit){
      this.dialogRef.close(this.templesForm.value);
    }else{
      this.dialogRef.close(isEdit);
    }

  }

}
