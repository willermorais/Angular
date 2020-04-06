import { ActivatedRoute } from '@angular/router';
import { AppService } from './../../services/app.service';
import { EventsService } from './../../services/events.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.css']
})
export class EventsFormComponent {

  templeId: number = this.actRoute.snapshot.params.id;

  eventsForm = this.fb.group({
    description: [null, Validators.required],
    date: [null, [Validators.required, Validators.max(999999), Validators.pattern("[0-9]*")]],
    time_measure: [null, Validators.required],
  });

  times_measure = [
    { name: 'After the Battle of Yavin', abbreviation: 'ABY' },
    { name: 'Before the Battle of Yavin', abbreviation: 'BBY' }
  ];

  descriptions = [
    { name: 'Constructed' },
    { name: 'Destroyed' },
    { name: 'Rebuilt' }
  ];

  constructor(private fb: FormBuilder, private eventsService: EventsService, private appService: AppService, private actRoute: ActivatedRoute) { }

  onSubmit() {
    this.eventsService.postEventByTempleId(this.eventsForm.value, this.templeId)
      .subscribe(() => {
        this.appService.reloadTableEventsEmit();
      });
  }
}
