import { Component, EventEmitter, Input, Output } from '@angular/core';
import { cource } from '../model/cources';



@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})

export class CourseCardComponent {
  @Input() cource_card!:cource;
  @Input() courceIndex!:number;

  @Output() 
  CourseEvent =new EventEmitter <cource>();

  onButtonClick(){
    console.log("button is clicked")
    this.CourseEvent.emit(this.cource_card);
  }

}
