import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-physical-specifications-form',
  templateUrl: './physical-specifications-form.component.html',
  styleUrls: ['./physical-specifications-form.component.css']
})
export class PhysicalSpecificationsFormComponent {
  specificationsForm = this.fb.group({
    description: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(14)]],
    specification: [null, [Validators.required, Validators.max(999999), Validators.pattern("[0-9]+(\.[0-9][0-9]?)?")]],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
