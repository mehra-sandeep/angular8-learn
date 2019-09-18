import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { PageListComponent } from './layout/page/page-list/page-list.component';
import { PageAddComponent } from './layout/page/page-add/page-add.component';
import { ProductListComponent } from './layout/product/product-list/product-list.component';
import { ProductAddComponent } from './layout/product/product-add/product-add.component';

const routes: Routes = [
	{ path: '', component: DashboardComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'page', component: PageListComponent },
	{ path: 'page/add', component: PageAddComponent },
	{ path: 'product', component: ProductListComponent },
	{ path: 'product/add', component: ProductAddComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
