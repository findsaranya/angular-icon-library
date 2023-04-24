import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NgTtIconsModule,
  TTIconRegistry
} from 'projects/ng-tt-icons/src/public-api';
import {
  ttIconIconTakeBackFacility,
  ttIconIconUploadImage
} from 'projects/ng-tt-icons/src/lib/tt-icon.model';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgTtIconsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ttIconRegistry: TTIconRegistry) {
    this.ttIconRegistry.registerIcons([
      ttIconIconTakeBackFacility,
      ttIconIconUploadImage
    ]);
  }
}
