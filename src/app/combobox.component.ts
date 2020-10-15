import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FilteringEventArgs } from '@syncfusion/ej2-dropdowns';

@Component({
  selector: 'combobox',
  template: `<ejs-combobox [allowCustom]="false" [allowFiltering]="true"(filtering)="onFiltering($event)"></ejs-combobox>`,
})
export class ComboboxComponent  {
  private input$: Subject<string> = new Subject<string>();

  constructor() {
    this.input$.pipe(
      debounceTime(300),
      distinctUntilChanged()
      ).subscribe((value) => console.warn('Search for', value));
  }

  public onFiltering(args: FilteringEventArgs) {
    this.input$.next(args.text);
  }
}
