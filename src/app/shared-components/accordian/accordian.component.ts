import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {

  @Input() title: string;;
  @Input() isHidden: boolean = true;
  constructor() { }

  ngOnInit() {

  }
  hiddenShow() {
    this.isHidden = !this.isHidden;
    var x = document.getElementById("collapse");
    if (x.innerHTML === "+") {
      x.innerHTML = "-";
    } else {
      x.innerHTML = "+";
    }
  }

}
