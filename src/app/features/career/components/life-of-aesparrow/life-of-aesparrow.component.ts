import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-life-of-aesparrow',
  templateUrl: './life-of-aesparrow.component.html',
  styleUrls: ['./life-of-aesparrow.component.scss']
})
export class LifeOfAesparrowComponent implements OnInit {

  lifeAtAESPARROW: any = null;

  constructor(
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.getData("life").subscribe({
      next: (data) => {
        this.lifeAtAESPARROW = {
          ...data,
          callToAction: data.call_to_action   // rename snake_case → camelCase
        };
      },
      error: (err) => {
        console.error("Failed to load Life at AESPARROW data", err);
      }
    });
  }

  onClick() {
    this.router.navigate(['/career/job-list']);
  }
}
