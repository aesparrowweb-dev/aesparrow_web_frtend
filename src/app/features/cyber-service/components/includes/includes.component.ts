import { Component, Input } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-includes',
  templateUrl: './includes.component.html',
  styleUrls: ['./includes.component.scss']
})
export class IncludesComponent {

  @Input() subIncludes:any;




}
