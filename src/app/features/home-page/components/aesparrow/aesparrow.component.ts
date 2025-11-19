import { Component } from '@angular/core';
import * as AOS from 'aos';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-aesparrow',
  templateUrl: './aesparrow.component.html',
  styleUrls: ['./aesparrow.component.scss']
})
export class AesparrowComponent {

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    AOS.init();
  }


  onClick(){
    this.router.navigate(['service/cybersecurity-consulting-services']);
    window.scrollTo(0,0)
  }

}
