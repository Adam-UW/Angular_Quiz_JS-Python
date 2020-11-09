import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Question} from './model.questions'

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private httpClient: HttpClient) { }

  // There are two type of Quized JS and Python
  // please make sure to run those files once a time using json-server command
  // !! MAKE SURE 
  loadQuestionDetails():Observable<Question[]>{
    return this.httpClient.get<Question[]>('http://localhost:3000/questions') 
  
  }
}

