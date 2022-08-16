import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {path: '', redirectTo: 'agencies', pathMatch: 'full'},
  {path: 'agencies', component: HomeComponent},
  {path: '**', redirectTo: 'agencies'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
