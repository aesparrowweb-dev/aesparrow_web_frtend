import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cyber-service',
  templateUrl: './cyber-service.component.html',
  styleUrls: ['./cyber-service.component.scss']
})
export class CyberServiceComponent {

  serviceData: any;
  mainServiceId: any;
  filterdService: any;
  subServiceId: any;
  subServiceData: any;
  mainServiceData: any;
  newSubServiceId: any;

  constructor(private http: HttpClient, private activateRoute: ActivatedRoute, private router: Router) { }



  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params => {
      const newMainServiceId = params.get('id');
      this.newSubServiceId = params.get('subId');
      this.mainServiceId = newMainServiceId;
      this.subServiceId = this.newSubServiceId;
      this.loadAllService(this.mainServiceId);
    });
  }


  loadAllService(serviceId: any) {
    this.http.get('assets/data/serviceData.json').subscribe(response => {
      this.serviceData = response;
      this.mainServiceData = this.serviceData.find((x: any) => x.id === serviceId);
      if (this.mainServiceData) {
        this.filterdService = this.mainServiceData.children || [];
        this.subServiceData = this.filterdService.find((y: any) => y.id === this.subServiceId);
      } else {
        this.filterdService = [];
        this.subServiceData = null;
      }
    });
  }
}
