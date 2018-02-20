//需要使用依赖注入，引入Inject
import { Component, OnInit, Inject } from '@angular/core';
import { Problem } from '../../models/problem.model';

//freeze 不能改变其任何属性，如果不加freeze则可以更改属性值
const DEFAULT_PROBLEM: Problem = Object.freeze({
  id: 0,
  name: "",
  desc: "",
  difficulty: "Easy"
});

@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})

export class NewProblemComponent implements OnInit {

  public difficulties = ["Easy", "Medium", "Hard", "Super"];

  newProblem: Problem = Object.assign({}, DEFAULT_PROBLEM);

  constructor(@Inject('data') private data) { }

  ngOnInit() {
  }

  addProblem():void{
    this.data.addProblem(this.newProblem)
        .catch(error => console.log(error._body));
    this.newProblem = Object.assign({},DEFAULT_PROBLEM);
  }

}
