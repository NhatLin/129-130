import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FashionComponent } from './fashion/fashion.component';
import { FashionDetailComponent } from './fashion-detail-component/fashion-detail-component.component';
import { FashionNewComponent } from './fashion-new-component/fashion-new-component.component';

const routes: Routes = [
  {path: 'dang-nhap', component: LoginComponent},
  {path: 'fashion-list', component: FashionComponent},
  {path: 'fashion-detail', component:FashionDetailComponent},
  {path: 'fashion-new', component:FashionNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
