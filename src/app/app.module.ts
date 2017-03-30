import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import 'hammerjs';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import {GridsterModule} from '../../lib/gridster.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    GridsterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
