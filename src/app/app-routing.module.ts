
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { PythonComponent } from './python/python.component';
import { SubmissionComponent } from './submission/submission.component';

export const applicationRoutes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'python', component: PythonComponent, children:[
   {path: 'submission', component:SubmissionComponent}
  ]},
  {path:'javascript', component: JavascriptComponent}

];
