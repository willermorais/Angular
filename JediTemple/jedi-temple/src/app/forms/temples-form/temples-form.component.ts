import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { TempleService } from './../../services/temple.service';
import { AppService } from './../../services/app.service';
import { Temple } from './../../models/Temple';

@Component({
  selector: 'app-temples-form',
  templateUrl: './temples-form.component.html',
  styleUrls: ['./temples-form.component.css']
})
export class TemplesFormComponent {
  
  templesForm = this.fb.group({
    location: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(14)]],
    builders: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(14)]],
  });

  constructor(private fb: FormBuilder, private templeService: TempleService, private appService: AppService) { }

  onSubmit() {
    this.templeService.postTemple(this.templesForm.value)
    .subscribe((temple: Temple) => {
      this.appService.reloadTableTampleEmit();
      });
  }
}