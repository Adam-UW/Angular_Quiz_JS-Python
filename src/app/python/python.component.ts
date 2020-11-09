import { Component, OnInit } from '@angular/core';
import { Question } from '../model.questions';
import { QuestionsService } from '../questions.service';


@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css']
})
export class PythonComponent implements OnInit {
  title:string="Python Quiz"
  loggedIn:boolean=false
  counter:number=0
  submitme=false
  checkBox:string=""
  finalFlag=false

  solutions:string[]=[]
  correct:string[]=['print', 'both', 'false']
  compare:boolean[]=[]

  constructor(private questionService:QuestionsService) { }
  questionsInfo:Question[]

  ngOnInit(): void {
    this.questionService.loadQuestionDetails().subscribe(data => this.questionsInfo=data, 
      error => console.log('ther was en error'))
      console.log('this called in python')
  }

  // loadQuestions(): void{
  //   this.questionService.loadQuestionDetails().subscribe(data => this.questionsInfo=data, error => console.log('ther was en error'))
  // }

  justCheck():void{
    this.loggedIn=true

    for (const element of this.questionsInfo) {
      // console.log(element.q);
    }

    console.log(this.questionsInfo[0]['q'])

  }

  increment(): void{
    this.counter++
    // console.log(this.solutions)
  }

  decrement():void{
    this.counter--
  }

  getfirst():void{
    this.counter=0
  }

  getlast():void{
    this.counter=this.questionsInfo.length-1
  }

  toggleEditable(event) {
    if (event.target.checked ) {
      // this.checkBox=event.target.value
      // console.log(this.checkBox)
      this.pushItems((event.target.value).trim())
   }
}

submitIn():void{
  this.submitme=true
}

private pushItems(vals:string):void{
  
  console.log(vals)
  this.solutions.push(vals)
}


finalSubmit():void{
  this.finalFlag=true
  console.log('Final Array')
  console.log(this.solutions)
  console.log(this.correct)

  for(const items of this.solutions){
    console.log('The items is ', items)
    console.log(this.correct.includes(items))
    this.compare.push(this.correct.includes(items))
  }

}

reset():void{
  this.finalFlag=false
  this.solutions=[]
}


}
