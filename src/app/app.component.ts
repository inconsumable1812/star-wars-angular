import { Component } from '@angular/core';
import { fetchPlanets } from 'src/api/fetchPlanets';
import { Planet, Planets } from 'src/api/types';
import { defaults } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'star-wars-angular';
  planets: Planets = { count: 0, next: null, previous: null, results: [] };
  loading = true;

  async ngOnInit(): Promise<void> {
    const data = await fetchPlanets({ page: '1' });

    if (data instanceof Error) {
      return;
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
          return Promise.reject(result);
        }

        if (result.results !== undefined) {
          allPlanets.push(...result.results);
        }
      }
    }

    data.results = [...allPlanets];

    this.planets = defaults(data, this.planets);
    this.loading = false;
  }
}
