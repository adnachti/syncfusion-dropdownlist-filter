import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComboboxComponent } from './combobox.component';

import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ComboBoxModule ],
  declarations: [ AppComponent, ComboboxComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
