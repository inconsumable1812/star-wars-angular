import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map, Observable } from 'rxjs';
import { People, Planet } from 'src/api/types';
import {
  peopleResultSelector,
  planetsResultSelector
} from '../reducers/getData/getData.selectors';

export type Gender = 'all' | 'male' | 'female' | 'unknown' | 'n/a';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  planets$: Observable<Planet[]> = this.store.select(planetsResultSelector);
  people$: Observable<People[]> = this.store.select(peopleResultSelector);
  people!: People[];
  currentPlanetName = '';
  planets!: Planet[];
  currentPlanet!: Planet;
  allPeopleInCurrentPlanet!: People[];
  filteredPeopleInCurrentPlanet!: People[];

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.currentPlanetName = params['planetName'];
    });

    this.getCurrentPeople();
  }

  getPlanets() {
    this.planets$.subscribe((planets) => (this.planets = planets));
  }

  getCurrentPlanet() {
    this.getPlanets();

    this.currentPlanet = this.planets.filter(
      (planet) => planet.name === this.currentPlanetName
    )[0];
  }

  getPeople() {
    this.people$.subscribe((people) => (this.people = people));
  }

  getCurrentPeople() {
    this.getCurrentPlanet();
    this.getPeople();
    this.allPeopleInCurrentPlanet = this.currentPlanet.residents
      .map((url) => this.people.filter((p) => p.url === url))
      .flat();
    this.genderFilter('all');
  }

  genderFilter(gender: Gender) {
    this.filteredPeopleInCurrentPlanet = this.allPeopleInCurrentPlanet.filter(
      (p) => {
        return gender === 'all' ? true : p.gender === gender;
      }
    );
  }

  onClick(e: Event) {
    this.genderFilter((e.currentTarget as HTMLSelectElement).value as Gender);
  }
}
