import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { Cources } from './assets/Cources';
import { cource } from './model/cources';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './component/parent/parent.component';
import { PipesComponent } from './component/pipes/pipes.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CourseCardComponent,CommonModule,ParentComponent,PipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  // courses=[...Cources]      
                               //    array spred syantax for copling data directly
  courses=Cources;            
                               //   we are using it directly for @for isnted creating all the index
  // cources_1=Cources[0];
  // cources_2=Cources[1];
  // cources_3=Cources[2];
  title = 'practice_1';
  dataReceiced?: cource;
  OnKeyUp(inputTitle:string){
    this.title =inputTitle;
  }
  OnSelectedEmitter(recieveCourseData:cource){
    console.log("event emmitter button is trigger",recieveCourseData);
    this.dataReceiced=recieveCourseData;
  }
}
