import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cources } from '../../assets/Cources';
import { cource } from '../../model/cources';



@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  // startDate='02/01/2015'      
                                  // 2 feb 2015
  startDate=new Date (2025,0 ,1)    
                                //  1 jan 2025 jan start from 0

  title='Angular deep drive code';
  price=24.567892
  rate=0.67
  cources:cource[]=Cources;
  Course=Cources[1];
  


}
