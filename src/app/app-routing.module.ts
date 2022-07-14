import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent
  },
  {
    path: 'planet',
    component: PeopleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
