import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  



import { JavascriptComponent } from './javascript/javascript.component';
import { PythonComponent } from './python/python.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import {applicationRoutes} from  './app-routing.module';
import { QuestionsComponent } from './questions/questions.component';
import { SubmissionComponent } from './submission/submission.component'
@NgModule({
  declarations: [
    JavascriptComponent,
    PythonComponent,
    HomeComponent,
    QuestionsComponent,
    SubmissionComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(applicationRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HomeComponent, QuestionsComponent]
})
export class AppModule { }
