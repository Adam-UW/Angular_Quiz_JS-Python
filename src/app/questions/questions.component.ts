import { Component, OnInit } from '@angular/core';
import { Question } from '../model.questions';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private questionService:QuestionsService) { }
  questionsInfo:Question[]

  ngOnInit(): void {
  }

  loadQuestions(): void{
    this.questionService.loadQuestionDetails().subscribe(data => this.questionsInfo=data, error => console.log('ther was en error'))
  }

}
