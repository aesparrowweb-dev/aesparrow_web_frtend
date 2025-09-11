import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  date:any;
  constructor(private router: Router) { }


  ngOnInit(){
    this.date = new Date().getFullYear();
  }

  onClickhome() {
    this.router.navigate(['home'])
    window.scrollTo(0, 0)
  }


  onClickCareer() {
    this.router.navigate(['./career'])
    window.scrollTo(0, 0)
  }


  onClickContact() {
    this.router.navigate(['./contact'])
    window.scrollTo(0, 0)
  }

  onClickTerms() {
    this.router.navigate(['./privacy-policy']);
    window.scrollTo(0, 0)
  }


  onClickCyber() {
    this.router.navigate(['./service/cybersecurity-consulting-services']);
    window.scrollTo(0, 0)
  }


  onClickVapt() {
    this.router.navigate(['./service/vapt-services']);
    window.scrollTo(0, 0)
  }

  onClickGrc() {
    this.router.navigate(['./service/governance-risk-and-compliance']);
    window.scrollTo(0, 0)
  }


  onClickOther() {
    this.router.navigate(['./service/other-services']);
    window.scrollTo(0, 0)
  }

}
