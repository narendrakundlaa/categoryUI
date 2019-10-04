import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IngProjectService } from 'src/app/ing-project.service';
import { Catagiries } from 'src/app/models/catagiries.model';
import { ProductList } from 'src/app/models/products.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catagiries',
  templateUrl: './catagiries.component.html',
  styleUrls: ['./catagiries.component.css'],
  providers: [MessageService]
})
export class CatagiriesComponent implements OnInit {
  catagiriesList: Catagiries[];
  prodList: ProductList[];
  data: any[];
  productDetails: any[];
  cate_id;
  constructor(private ingProjectService: IngProjectService, private router: Router) { }

  ngOnInit() {
    this.ingProjectService.getCatagiries().subscribe((catList: any) => {
      this.catagiriesList = catList.category;
      // this.catagiriesList = catList.category;
      console.log(catList);
    });

    // this.data = [
    //   { id: 1, name: 'Narendra', age: 30, salary: 5000, company: 'HCL Tech' },
    //   { id: 2, name: 'Kundla', age: 30, salary: 5000, company: 'HCL' }
    // ]
    // this.productDetails = [
    //   { id: 1, name: 'nare', age: 30, salary: 5000, company: 'HCL Tech' },
    //   { id: 2, name: 'nare', age: 30, salary: 5000, company: 'HCL Banglore' },

    // ]
  }

  detailedView(id: number, prod: any) {

    this.router.navigate(['/catagories', id])
    localStorage.setItem('data', prod.productName);
    localStorage.setItem('dataDescription', prod.description);
  }

  viewProducts(event) {
    this.ingProjectService.getproducts(event.categoryId).subscribe((prodList: any) => {
      this.prodList = prodList.products;
      console.log(this.prodList);
    });
    // debugger;
  }
}
