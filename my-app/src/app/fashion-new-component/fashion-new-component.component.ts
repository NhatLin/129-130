import { Component, ViewChild, ElementRef } from '@angular/core';
import { FashionAPIServiceService } from '../fashion-apiservice.service';
import { Fashion } from '../models/Fashion';

@Component({
    selector: 'app-fashion-new',
    templateUrl: './fashion-new-component.component.html',
    styleUrls: ['./fashion-new-component.component.css'],
})
export class FashionNewComponent {
    fashion = new Fashion();
    errMessage: string = '';
    selectedFileName: string = ''; // Biến để lưu tên file

    @ViewChild('fileInput') fileInput!: ElementRef; // Tham chiếu đến input file

    constructor(private _service: FashionAPIServiceService) { }

    // Xử lý file khi chọn
    onFileSelected(event: any) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            this.fashion.fashion_image = reader.result as string;
            event.target.value = ''; // Đặt lại giá trị của input sau khi đọc file
        };

        if (file) {
            this.selectedFileName = file.name; // Cập nhật tên file được chọn
            reader.readAsDataURL(file);
        } else {
            this.fashion.fashion_image = ''; // Nếu không có file được chọn
            this.selectedFileName = ''; // Đặt lại tên file
        }

        reader.onerror = (error) => {
            console.log('Error: ', error);
        };
    }

    // Gửi dữ liệu lên API
    postFashion() {
        this._service.postFashion(this.fashion).subscribe({
            next: (data) => {
                this.fashion = new Fashion(); // Reset form after submission
                this.selectedFileName = ''; // Đặt lại tên file
                this.errMessage = 'Fashion data submitted successfully!';
            },
            error: (err) => {
                this.errMessage = 'Error: ' + err.message; // Cải thiện thông báo lỗi
            },
        });
    }

    // Mở hộp thoại chọn file
    openFileSelector() {
        this.fileInput.nativeElement.click();
    }
}
