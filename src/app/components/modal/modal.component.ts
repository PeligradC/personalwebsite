
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {
  @Input() product!: any;
  @Output() close = new EventEmitter<void>(); // Add this for communication with parent
  
  constructor(private service: ProductService, private router: Router) {}

  ngOnInit(): void {}

  public hideModal() {
    this.close.emit(); // Emit close event to parent component
  }

  deleteProduct() {
    
     this.service.deleteProduct(this.product._id).subscribe({
       next: (response) => {
         if (response) {
           this.hideModal();
           window.location.reload();
         }
       },
       error: (error) => {
         alert(error);
       }
   });
  }

  editProduct() {
    this.router.navigate([`/edit-product/${this.product._id}`]);
    this.hideModal(); // Close modal after navigation
  }
}