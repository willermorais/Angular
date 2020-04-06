import { PhysicalSpecificationsService } from './../../services/physicalSpecifications.service';
import { ActivatedRoute } from '@angular/router';
import { AppService } from './../../services/app.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-physical-specifications-form',
  templateUrl: './physical-specifications-form.component.html',
  styleUrls: ['./physical-specifications-form.component.css']
})
export class PhysicalSpecificationsFormComponent {

  templeId: number = this.actRoute.snapshot.params.id;

  specificationsForm = this.fb.group({
    description: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(14)]],
    specification: [null, [Validators.required, Validators.max(999999), Validators.pattern("[0-9]+(\.[0-9][0-9]?)?")]],
  });

  constructor(private fb: FormBuilder, private physicalSpecificationsService: PhysicalSpecificationsService, private appService: AppService, private actRoute: ActivatedRoute) { }

  onSubmit() {
    this.physicalSpecificationsService.postPhysicalSpecificationByTempleId(this.specificationsForm.value, this.templeId)
      .subscribe(() => {
        this.appService.reloadTablePhysicalSpecificationsEmit();
      });
  }
}
