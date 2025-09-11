import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-methadology',
  templateUrl: './methadology.component.html',
  styleUrls: ['./methadology.component.scss']
})
export class MethadologyComponent {

  @Input() subMethadology:any;
  

}
