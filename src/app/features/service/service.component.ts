import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environments';

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

  loadAllService(serviceSlug: string) {
    this.http
      .get<any>(`${environment.apiUrl}service/${serviceSlug}/`)
      .subscribe(data => {
        this.filterdService = data;
      });
  }


}
