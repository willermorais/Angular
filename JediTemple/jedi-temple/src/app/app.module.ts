import { TempleService } from './services/temple.service';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';

import { TemplesFormComponent } from './forms/temples-form/temples-form.component';
import { EventsFormComponent } from './forms/events-form/events-form.component';
import { PhysicalSpecificationsFormComponent } from './forms/physical-specifications-form/physical-specifications-form.component';

import { TemplesTableComponent } from './tables/temples-table/temples-table.component';
import { EventsTableComponent } from './tables/events-table/events-table.component';
import { PhysicalSpecificationsTableComponent } from './tables/physical-specifications-table/physical-specifications-table.component';
import { TempleBodyDialogDeleteComponent } from './tables/temples-table/dialog/temple-body-dialog-delete/temple-body-dialog-delete.component';
import { TempleBodyDialogEditComponent } from './tables/temples-table/dialog/temple-body-dialog-edit/temple-body-dialog-edit.component';
import { EventBodyDialogDeleteComponent } from './tables/events-table/dialog/event-body-dialog-delete/event-body-dialog-delete.component';
import { EventBodyDialogEditComponent } from './tables/events-table/dialog/event-body-dialog-edit/event-body-dialog-edit.component';
import { PhysicalSpecificationsBodyDialogEditComponent } from './tables/physical-specifications-table/dialog/physical-specifications-body-dialog-edit/physical-specifications-body-dialog-edit.component';
import { PhysicalSpecificationsBodyDialogDeleteComponent } from './tables/physical-specifications-table/dialog/physical-specifications-body-dialog-delete/physical-specifications-body-dialog-delete.component';
import { SpecificationsComponent } from './specifications/specifications.component';
import { HandleErrorService } from './services/handleError.service';

@NgModule({
  declarations: [
    AppComponent,
    PhysicalSpecificationsFormComponent,
    EventsFormComponent,
    TemplesTableComponent,
    EventsTableComponent,
    PhysicalSpecificationsTableComponent,
    TemplesFormComponent,
    TempleBodyDialogDeleteComponent,
    TempleBodyDialogEditComponent,
    EventBodyDialogDeleteComponent,
    EventBodyDialogEditComponent,
    PhysicalSpecificationsBodyDialogEditComponent,
    PhysicalSpecificationsBodyDialogDeleteComponent,
    SpecificationsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [ TempleService, HandleErrorService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
