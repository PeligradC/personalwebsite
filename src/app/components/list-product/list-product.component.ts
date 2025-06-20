import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { GetProduct } from '../../product.model';
import { CommonModule } from '@angular/common';
import { ModalComponent } from "../modal/modal.component";
import { Router } from '@angular/router'; // Add this import

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent implements OnInit {
  products: any = [];
  productData!: any;
  isModalVisible: boolean | undefined;
  visited: boolean = false;
  constructor(
    private service: ProductService,
    private router: Router // Inject Router
  ) {}

  ngOnInit() {
    this.displayProduct();
    this.isModalVisible = false;
    console.log(this.service.visited)
 
   if (!this.service.visited) {
      // Set the flag indicating the user has now visited this session
      this.service.visited = true

      // Redirect to /add-product
      this.router.navigate(['/add-product']).then(() => {
    
        this.router.navigate(['/']);
      })
      this.router.navigate(['/add-product']).then(() => {
    
        this.router.navigate(['/']);
      })
    }
  }

  displayProduct() {
    this.service.getProduct().subscribe({
      next: (res: GetProduct) => {
        this.products = res;
      },
      error: (err) => {
        alert(err);
      }
    });
  }

  modalData(product: any) {
    console.log(product);
    this.productData = product;
    this.isModalVisible = true;
  }
}