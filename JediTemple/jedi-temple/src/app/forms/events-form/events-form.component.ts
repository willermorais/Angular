import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.css']
})
export class EventsFormComponent {
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

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
