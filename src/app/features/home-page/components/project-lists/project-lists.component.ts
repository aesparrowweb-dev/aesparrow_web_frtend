import { Component, ViewChild, ElementRef, Renderer2, Input, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-project-lists',
  templateUrl: './project-lists.component.html',
  styleUrls: ['./project-lists.component.scss']
})
export class ProjectListsComponent {
  @ViewChild('statSection', { static: false }) statSection!: ElementRef;
 hasAnimated = false;
 animatedNumbers: { [key: number]: number } = {};

statData: any[] = [];


  constructor(private apiService: ApiService) {}


  ngOnInit() {
    this.apiService.getData('project-lists').subscribe({
      next: (response) => {
        this.statData = response;
      },
      error: (err) => {
        console.error('Error fetching project lists for home page:', err);
      }
    });
  }



  ngAfterViewInit() {
    setTimeout(() => {
      if (this.statSection) {
        this.observeSection();
      }
    }, 0);

  }

    observeSection() {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !this.hasAnimated) {
        this.animateNumbers();
        this.hasAnimated = true;
      }
    }, { threshold: 0.3 });

    observer.observe(this.statSection.nativeElement);
  }


  animateNumbers() {
    const oneStopList = this.statData;
    if (!oneStopList?.length) return;
  
    oneStopList.forEach((item: any) => {
      const targetNumber = typeof item.numbers === 'number' ? item.numbers : parseInt(item.numbers) || 0;
      let current = 0;
      const step = Math.ceil(targetNumber / 100);
  
      const interval = setInterval(() => {
        current += step;
        if (current >= targetNumber) {
          this.animatedNumbers[item.id] = targetNumber;
          clearInterval(interval);
        } else {
          this.animatedNumbers[item.id] = current;
        }
      }, 30);
    });
  }

  
}
