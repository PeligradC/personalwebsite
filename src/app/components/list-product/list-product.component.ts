import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { GetProduct } from '../../product.model';
import { CommonModule } from '@angular/common';
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {
  products: any = [];
  productData! : any
  isModalVisible: boolean | undefined;


  constructor(private service: ProductService){}
  ngOnInit(){
    this.displayProduct()
    this.isModalVisible = false;
  }
  displayProduct()
  {
    this.service.getProduct().subscribe({
      next:(res: GetProduct)=> {
        //console.log(res);
        this.products = res
      },
      error:(err)=>{
        alert(err)}
    }
    
  )
  }

  modalData(product: any)
  {
    console.log(product);
    this.productData = product;
    this.isModalVisible = true;
  }
}
