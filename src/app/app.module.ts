import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '@Env';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appEffects, getReducers, REDUCER_TOKEN } from './store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    HttpClientModule,
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({
      name: '[TodoList]',
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    {
      provide: REDUCER_TOKEN,
      useFactory: getReducers,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
