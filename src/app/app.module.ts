import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, Ng2SearchPipeModule ],
  declarations: [ AppComponent, HelloComponent, TabComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
// imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,Ng2SearchPipeModule ],