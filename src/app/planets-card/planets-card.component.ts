import { Component, Input, OnInit } from '@angular/core';
import { Planet } from 'src/api/types';

@Component({
  selector: 'app-planets-card',
  templateUrl: './planets-card.component.html',
  styleUrls: ['./planets-card.component.scss']
})
export class PlanetsCardComponent implements OnInit {
  @Input()
  planet!: Planet;

  constructor() {}

  ngOnInit(): void {}
}
