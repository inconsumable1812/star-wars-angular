import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { PlanetsCardComponent } from './planets-card/planets-card.component';
import { PlanetsComponent } from './planets/planets.component';
import { GetInfoComponent } from './get-info/get-info.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppEffects } from './app.effects';
import { metaReducers, reducers } from './reducers';
import { PeopleComponent } from './people/people.component';
import { PeopleCardComponent } from './people-card/people-card.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    PlanetsCardComponent,
    PlanetsComponent,
    GetInfoComponent,
    PeopleComponent,
    PeopleCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
