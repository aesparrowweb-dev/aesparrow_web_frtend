import { Component, Input } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-security-lists',
  templateUrl: './security-lists.component.html',
  styleUrls: ['./security-lists.component.scss']
})
export class SecurityListsComponent {

  @Input() subSecurityLists: any;

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }
}
