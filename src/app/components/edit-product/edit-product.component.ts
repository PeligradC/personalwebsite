
import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environment/environment';
import { ProductService } from '../../services/product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {
  id!: number;
  data!: any;
  editProductForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private service: ProductService,
    private actRoute: ActivatedRoute
  ) {
    this.editProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      product: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.actRoute.params.subscribe((params) => {
      this.id = params['id'];

      console.log(this.id);
      this.service.getProductById(this.id).subscribe((res) => {
        console.log(res);
        this.data = res;
        this.editProductForm.get('name')?.setValue(this.data.name);
      });
    });
  }
  uploadProduct(event: any) {
    const file = event.target.files[0];

    this.editProductForm.patchValue({
      product: file,
    });
  }
  onSubmit() {
    let formData = new FormData();
    formData.append('name', this.editProductForm.get('name')?.value);
    formData.append('product', this.editProductForm.get('product')?.value);
    console.log(formData);
    this.http
      .put(`${environment.baseURL}/update/${this.id}`, formData)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/']);
        },
        error: (error) => {
          alert('Error occurred while uploading product');
        },
      });
  }
}
