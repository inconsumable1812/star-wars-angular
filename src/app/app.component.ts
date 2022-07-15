import { Component } from '@angular/core';
import { fetchPlanets } from 'src/api/fetchPlanets';
import { People, Peoples, Planet, Planets } from 'src/api/types';
import { defaults } from 'lodash';
import { Store } from '@ngrx/store';
import { people, planets } from './reducers/getData/getData.actions';
import { fetchPeople } from 'src/api/fetchPeople';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'star-wars-angular';
  planets: Planets = { count: 0, next: null, previous: null, results: [] };
  peoples: Peoples = { count: 0, next: null, previous: null, results: [] };
  loading = true;

  constructor(private store: Store) {}

  async ngOnInit() {
    await this.getAllData();
    this.store.dispatch(planets({ planets: this.planets }));
    this.store.dispatch(people({ people: this.peoples }));
  }

  async getAllData() {
    await this.getAllPlanets();
    await this.getAllPeople();
    this.loading = false;
  }

  async getAllPlanets() {
    const data = await fetchPlanets({ page: '1' });

    if (data instanceof Error) {
      throw data;
    }

    const allPlanets: Planet[] = [];

    if (data.results !== undefined) {
      allPlanets.push(...data.results);
    }

    if (data.count !== undefined) {
      const allPlanetsCount = data.count;
      const planetsInOnePage = 10;

      for (
        let index = 2;
        index <= allPlanetsCount / planetsInOnePage;
        index++
      ) {
        const result = await fetchPlanets({ page: index.toString() });

        if (result instanceof globalThis.Error) {
          throw result;
        }

        if (result.results !== undefined) {
          allPlanets.push(...result.results);
        }
      }
    }

    data.results = [...allPlanets];

    this.planets = defaults(data, this.planets);
  }

  async getAllPeople() {
    const data = await fetchPeople({ page: '1' });

    if (data instanceof Error) {
      throw data;
    }

    const allPeople: People[] = [];

    if (data.results !== undefined) {
      allPeople.push(...data.results);
    }

    if (data.count !== undefined) {
      const allPeopleCount = data.count;
      const peopleInOnePage = 10;

      for (let index = 2; index <= allPeopleCount / peopleInOnePage; index++) {
        const result = await fetchPeople({ page: index.toString() });

        if (result instanceof globalThis.Error) {
          throw result;
        }

        if (result.results !== undefined) {
          allPeople.push(...result.results);
        }
      }
    }

    data.results = [...allPeople];

    this.peoples = defaults(data, this.peoples);
  }
}
