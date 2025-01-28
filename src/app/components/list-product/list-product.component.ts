import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { GetProduct } from '../../product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {
  products: any = []



  constructor(private service: ProductService){}
  ngOnInit(){
    this.displayProduct()

  }
  displayProduct()
  {
    this.service.getProduct().subscribe({
      next:(res: GetProduct)=> {
        console.log(res);
        this.products = res
      },
      error:(err)=>{
        alert(err)}
    }
    
  )
  }
}
