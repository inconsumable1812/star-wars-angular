import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Planet } from 'src/api/types';
import { planetsResultSelector } from '../reducers/getData/getData.selectors';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  planets$: Observable<Planet[]> = this.store.select(planetsResultSelector);

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
