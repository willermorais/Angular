import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardTempleComponent } from './../dashboard/dashboard-temple/dashboard-temple.component';
import { DashboardSpecificationsComponent } from './../dashboard/dashboard-specifications/dashboard-specifications.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboardTemple', pathMatch: 'full' },
  { path: 'dashboardTemple', component: DashboardTempleComponent },
  {path: 'specifications/:id', component: DashboardSpecificationsComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }