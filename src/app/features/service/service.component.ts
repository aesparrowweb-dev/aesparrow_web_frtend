import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  serviceData: any;
  mainServiceId:any;
  filterdService:any;
  constructor(private http: HttpClient, private activateRoute: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params => {
      this.mainServiceId = params.get('id');
      this.loadAllService(this.mainServiceId);
    })
  }

 loadAllService(serviceId: any) {
  this.http
    .get<any[]>('http://localhost:8000/api/services/menu/')
    .subscribe((data) => {
      this.serviceData = data;

      this.filterdService = this.serviceData.find(
        (x: any) => x.slug === serviceId || x.id === serviceId
      );
    });
}


}
