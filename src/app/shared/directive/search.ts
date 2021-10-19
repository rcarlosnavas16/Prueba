import {
  EventEmitter,
  Directive,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, map } from 'rxjs/operators';

/**
 * Container for MatSortables to manage the sort state and provide default sort parameters. */
@Directive({
  selector: '[mSearch]',
  exportAs: 'mSearch',
  host: { class: 'm-search' },
})
export class MSearch implements AfterViewInit {
  /**
   * The value of the most recently search typed by the user.
   */
  private value = '';
  /**
   * Event emitted when the user do a search
   * */
  readonly onChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private elementRef: ElementRef<HTMLInputElement>) {}

  get getValue(): string {
    return this.value;
  }

  ngAfterViewInit(): void {
    fromEvent(this.elementRef.nativeElement, 'input')
      .pipe(
        map((evt: any) => evt.target['value']),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        this.value = value;
        this.onChange.emit(value);
      });
  }
}
