import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { fetchPlanets } from 'src/api/fetchPlanets';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss']
})
export class XyzComponent implements OnInit {
  inputValue = '';

  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    const data = await fetchPlanets({ page: '1' });

    console.log(data);

    // this.http
    //   .get('https://swapi.dev/api/planets')
    //   .subscribe((res) => console.log(res));
  }

  onInput(e: Event): void {
    this.inputValue = (e.target as HTMLInputElement).value;
  }
}
