import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SerieModule } from './serie/serie.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SerieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
