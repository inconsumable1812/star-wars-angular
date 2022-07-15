import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from 'src/api/types';

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.scss']
})
export class PeopleCardComponent implements OnInit {
  @Input()
  people!: People;

  constructor() {}

  ngOnInit(): void {}
}
