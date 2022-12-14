import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CreateAgencyComponent } from "./create-agency/create-agency.component";
import { EditAgencyComponent } from "./edit-agency/edit-agency.component";

const routes: Routes = [
  {path: '', redirectTo: 'agencies', pathMatch: 'full'},
  {path: 'agencies', component: HomeComponent},
  {path: 'create-agency', component: CreateAgencyComponent},
  {path: 'agencies/:id', component: EditAgencyComponent},
  {path: '**', redirectTo: 'agencies'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
