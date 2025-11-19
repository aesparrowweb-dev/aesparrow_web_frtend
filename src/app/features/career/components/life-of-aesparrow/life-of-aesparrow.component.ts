import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-life-of-aesparrow',
  templateUrl: './life-of-aesparrow.component.html',
  styleUrls: ['./life-of-aesparrow.component.scss']
})
export class LifeOfAesparrowComponent {
  lifeAtAESPARROW = {
    culture: 'At AESPARROW, we thrive in a culture of innovation, collaboration, and continuous growth. We believe in empowering our teams with trust, flexibility, and purpose.',
    values: [
      'Integrity in everything we do',
      'Cybersecurity-first mindset',
      'Customer-centric innovation',
      'Encouraging personal and professional growth',
      'Teamwork and knowledge sharing'
    ],
    benefits: [
      'Flexible work hours & hybrid model',
      'Weekly tech learning sessions',
      'Employee recognition programs',
      'Mental wellness support',
      'Hackathons and team retreats'
    ],
    callToAction: 'Ready to grow your career with us? Explore our open roles and become part of the AESPARROW family.'
  };

  constructor(private router: Router) { }


  onClick() {
    this.router.navigate(['/career/job-list'])
  }
}
