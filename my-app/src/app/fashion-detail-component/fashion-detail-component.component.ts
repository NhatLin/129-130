import { Component, OnInit } from '@angular/core';
import { FashionAPIServiceService } from '../fashion-apiservice.service';
import { Fashion } from '../models/Fashion';

@Component({
  selector: 'app-fashion-detail-component',
  templateUrl: './fashion-detail-component.component.html',
  styleUrls: ['./fashion-detail-component.component.css']
})
export class FashionDetailComponent implements OnInit {
  fashionId: string = '';
  fashion: Fashion | null = null;
  errMessage: string = '';
  isLoading: boolean = false;

  constructor(private fashionService: FashionAPIServiceService) {}

  ngOnInit() {
    this.fetchFashion(); // Gọi hàm fetch khi component khởi tạo
  }

  // Lấy thông tin sản phẩm thời trang theo ID
  fetchFashion() {
    if (!this.fashionId) {
      console.warn("Fashion ID is not set.");
      return;
    }

    this.isLoading = true; // Thiết lập trạng thái đang tải
    this.fashionService.getFashion(this.fashionId).subscribe(
      (data) => {
        this.fashion = data;
        this.errMessage = ''; // Xóa thông báo lỗi nếu có
        this.isLoading = false; // Đặt lại trạng thái tải
      },
      (error) => {
        this.errMessage = "Error fetching fashion detail: " + error;
        console.error(this.errMessage);
        this.isLoading = false; // Đặt lại trạng thái tải
      }
    );
  }
}
