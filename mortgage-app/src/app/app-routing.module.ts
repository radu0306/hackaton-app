import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStartedPageComponent } from './components/get-started-page/get-started-page.component';

const routes: Routes = [
   { path: 'welcome-page', component: GetStartedPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
