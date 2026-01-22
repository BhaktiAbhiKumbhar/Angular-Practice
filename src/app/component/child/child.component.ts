import { Component, EventEmitter, Input, Output} from '@angular/core';
import { cource } from '../../model/cources';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input () id!:number;
@Input() Heading!:string;
@Input() description!:string;

  @Output() sendData = new EventEmitter<{
    id: number;
    heading: string;
    description: string;
  }>();


  toSendDatainParent() {
    this.sendData.emit({
      id: 4,
      heading: 'Heading_4',
      description: 'send data from child to parent'
    });
  }

}
