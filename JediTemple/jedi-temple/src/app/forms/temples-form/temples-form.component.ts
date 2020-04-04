import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}