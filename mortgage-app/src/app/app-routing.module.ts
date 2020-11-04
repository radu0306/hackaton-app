import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStartedPageComponent } from './components/get-started-page/get-started-page.component';
import { Question1Component } from './components/question1/question1.component';
import { Question2Component } from './components/question2/question2.component';

const routes: Routes = [
   { path: 'welcome-page', component: GetStartedPageComponent },
   { path: 'question1', component: Question1Component },
   { path: 'question2', component: Question2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
