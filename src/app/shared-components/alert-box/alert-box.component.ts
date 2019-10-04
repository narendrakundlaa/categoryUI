import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent implements OnInit {

  @Input() message: string;
  @Input() type: string;
  @Input() display: boolean = false;

  @Output() closeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeButton() {
    this.closeEvent.emit();
  }

}
