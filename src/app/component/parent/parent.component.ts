import { Component } from '@angular/core';
import { Cources } from '../../assets/Cources';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  course_1=Cources[0];
  course_2=Cources[1];
  course_3=Cources[2];

   getdata!: {
    id: number;
    heading: string;
    description: string;
  };



    receivedata(data: {
    id: number;
    heading: string;
    description: string;
  }) {
    this.getdata = data;
  }
}


