import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestHistoryComponent } from './invest-history/invest-history.component';
import { InvestAssessmentComponent } from './invest-assessment/invest-assessment.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestHistoryComponent,
    InvestAssessmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
