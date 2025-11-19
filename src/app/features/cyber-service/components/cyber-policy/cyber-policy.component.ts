import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cyber-policy',
  templateUrl: './cyber-policy.component.html',
  styleUrls: ['./cyber-policy.component.scss']
})
export class CyberPolicyComponent {

  @Input() subCyberPolicy:any;

}
