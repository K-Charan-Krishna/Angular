import {   Component, Input, OnInit, OnChanges, OnDestroy,
  AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

@Input() data: any;
  @ViewChild('para') para!: ElementRef;

  constructor() {
    console.log('Constructor called 1 ');
  }

  ngOnChanges() {
    console.log('Input properties changed');
  }

  ngOnInit() {
    console.log('OnInit - fetch data or setup 2');
  }

  ngAfterViewInit() {
    console.log('View initialized:', this.para.nativeElement);
  }

  ngOnDestroy() {
    console.log('Component is being destroyed');
  }

}
