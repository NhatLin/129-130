import { Component } from '@angular/core';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent {
  products=[{"ProductId":"P1","ProductName":"Coca","UnitPrice":15,"Image":"assets/coca.PNG"},
            {"ProductId":"P2","ProductName":"Pepsi","UnitPrice":20,"Image":"assets/pepsi.PNG"},
            {"ProductId":"P3","ProductName":"Redbull","UnitPrice":17,"Image":"assets/redbull.PNG"},
            {"ProductId":"P4","ProductName":"AQua","UnitPrice":10,"Image":"assets/aqua.PNG"},
            {"ProductId":"P5","ProductName":"Sting","UnitPrice":22,"Image":"assets/sting.PNG"},
  ]
  
}
