import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubjectComponent } from './components/subject.component';
import { TaskComponent } from './components/task.component';
import { ReportCompnent } from './components/report.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    TaskComponent,
    ReportCompnent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
