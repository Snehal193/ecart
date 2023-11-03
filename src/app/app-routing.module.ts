import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempFormComponent } from './temp-form/temp-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppComponent } from './app.component';
import { AddProductComponent } from './service/authentication/add-product/add-product.component';

const routes: Routes = [
  {path: "app", component: AppComponent },
  {path: "dashboard", component: DashboardComponent },
  {path: "login", component: TempFormComponent},
  {path: "add-product", component: AddProductComponent},

  
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {path: "products", component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
