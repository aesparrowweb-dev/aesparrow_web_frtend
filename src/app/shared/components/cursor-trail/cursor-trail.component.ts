import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-cursor-trail',
  templateUrl: './cursor-trail.component.html',
  styleUrls: ['./cursor-trail.component.scss']
})
export class CursorTrailComponent implements OnInit, OnDestroy {
  trails: Array<{ x: number; y: number; id: number; delay: number }> = [];
  maxTrails = 12;
  trailId = 0;
  mouseTimer: any;
  isMouseMoving = false;
  stopMouseTimer: any;

  ngOnInit() {
    this.createInitialTrails();
  }

  ngOnDestroy() {
    if (this.mouseTimer) {
      clearTimeout(this.mouseTimer);
    }
    if (this.stopMouseTimer) {
      clearTimeout(this.stopMouseTimer);
    }
  }

  createInitialTrails() {
    for (let i = 0; i < this.maxTrails; i++) {
      this.trails.push({ 
        x: -100, 
        y: -100, 
        id: this.trailId++,
        delay: i * 30
      });
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.isMouseMoving = true;
    
    if (this.mouseTimer) {
      clearTimeout(this.mouseTimer);
    }

    this.mouseTimer = setTimeout(() => {
      this.updateTrail(event.clientX, event.clientY);
    }, 10);

    // Clear the stop timer and set a new one
    if (this.stopMouseTimer) {
      clearTimeout(this.stopMouseTimer);
    }
    
    this.stopMouseTimer = setTimeout(() => {
      this.isMouseMoving = false;
      this.fadeOutTrails();
    }, 100);
  }

  updateTrail(x: number, y: number) {
    // Remove the oldest trail and add a new one at the current position
    if (this.trails.length >= this.maxTrails) {
      this.trails.shift();
    }
    
    this.trails.push({ 
      x, 
      y, 
      id: this.trailId++,
      delay: 0
    });
  }

  fadeOutTrails() {
    setTimeout(() => {
      this.trails = [];
      this.createInitialTrails();
    }, 300);
  }
}
