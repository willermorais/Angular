import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { PhysicalSpecification } from './../../../../models/PhysicalSpecification';

@Component({
  selector: 'app-physical-specifications-body-dialog-edit',
  templateUrl: './physical-specifications-body-dialog-edit.component.html',
  styleUrls: ['./physical-specifications-body-dialog-edit.component.css']
})
export class PhysicalSpecificationsBodyDialogEditComponent implements OnInit {

  specificationsForm = this.fb.group({
    description: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(14)]],
    specification: [null, [Validators.required, Validators.max(999999), Validators.pattern("[0-9]+(\.[0-9][0-9]?)?")]],
  });
  
  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public specification: PhysicalSpecification, 
  public dialogRef: MatDialogRef<PhysicalSpecificationsBodyDialogEditComponent>) {
  }
  
  ngOnInit(): void {
    this.specificationsForm.controls['description'].setValue(this.specification.description);
    this.specificationsForm.controls['specification'].setValue(this.specification.specification);
  }
  
  close(isEdit: boolean) {
    
    if(isEdit){
      this.dialogRef.close(this.specificationsForm.value);
    }else{
      this.dialogRef.close(isEdit);
    }
  
  }
  

}
