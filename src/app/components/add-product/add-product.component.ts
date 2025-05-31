import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup , FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from '../../../../environment/environment';
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

 
  productForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private router:Router,private http: HttpClient)
  {
    this.productForm = this.formBuilder.group({
      name:['',Validators.required],
      product: ['',Validators.required]
    })
  }

  ngOnInit():void{

  }

  uploaProduct(event: any) {
    const file = event.target.files[0];

    this.productForm.patchValue({
      product: file,
    });

  }


  onSubmit() {
    console.log(this.productForm.get('name')?.value)
    console.log(this.productForm.get('product')?.value)

    let formData = new FormData();
    formData.append('name',this.productForm.get('name')?.value)
    formData.append('product',this.productForm.get('product')?.value)

    this.http.post(`${environment.baseURL}/add`,formData).subscribe({
      next: (res)=>{
        console.log(res);
        this.router.navigate(['/'])
      },
      error: (error) =>{
        alert("Error occured while uploading product")
      }
    })
    }
}
