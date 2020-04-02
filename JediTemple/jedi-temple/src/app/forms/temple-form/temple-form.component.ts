import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-temple-form',
  templateUrl: './temple-form.component.html',
  styleUrls: ['./temple-form.component.css']
})
export class TempleFormComponent {
  templesForm = this.fb.group({
    location: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(14)]],
    builders: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(14)]],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
