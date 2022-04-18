import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() title: any;
  @Output() parentComponentprop: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  callParentFunction() {
    this.parentComponentprop.emit('From child');
  }
}
