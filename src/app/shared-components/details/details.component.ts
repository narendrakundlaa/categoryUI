import { Component, OnInit } from '@angular/core';
import { IngProjectService } from 'src/app/ing-project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productNameSelected: string;
  product: any;
  proDes: any;
  constructor(private ingProjectService: IngProjectService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.productNameSelected = localStorage.getItem('data');
    this.proDes = localStorage.getItem('dataDescription');

    this._route.paramMap.subscribe(paramData => {
      const _id = +paramData.get('id');
      this.ingProjectService.getCatagiriesById(_id).subscribe(data => {
        this.product = data;
        console.log(data);
      })
    })

  }

}
