import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-event-body-dialog-edit',
  templateUrl: './event-body-dialog-edit.component.html',
  styleUrls: ['./event-body-dialog-edit.component.css']
})
export class EventBodyDialogEditComponent implements OnInit {

  eventsForm = this.fb.group({
    description: [null, Validators.required],
    date:        [null, [Validators.required, Validators.max(999999), Validators.pattern("[0-9]*")]],
    time_measure: [null, Validators.required],
  });

  times_measure = [
    {name: 'After the Battle of Yavin', abbreviation: 'ABY'},
    {name: 'Before the Battle of Yavin', abbreviation: 'BBY'}
  ];

  descriptions = [
    {name: 'Constructed'},
    {name: 'Destroyed'},
    {name: 'Rebuilt'}
  ];

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public event: Event, 
  public dialogRef: MatDialogRef<EventBodyDialogEditComponent>) {

    this.dialogRef.updateSize('500', '500');
  }

  ngOnInit(): void {
  }

  close(isEdit: boolean) {
    
    if(isEdit){
      this.dialogRef.close(this.eventsForm.value);
    }else{
      this.dialogRef.close(isEdit);
    }

  }
}
