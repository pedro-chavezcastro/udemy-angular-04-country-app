import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @ViewChild('txtSearchBoxInput')
  public txtSearchBoxInput!: ElementRef<HTMLInputElement>;

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  public searchTerm(): void {
    const term = this.txtSearchBoxInput.nativeElement.value;
    this.onValue.emit(term);
  }

}
