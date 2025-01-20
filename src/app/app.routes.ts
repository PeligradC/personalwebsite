import { Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';

export const routes: Routes = [
    {path: 'add-product', component: AddProductComponent},
    {path: 'edit-product/:id', component: EditProductComponent},
    {path: '', component: ListProductComponent},
    {path: '',redirectTo:'',pathMatch:'full'},
];
