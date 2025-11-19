import { Component, ChangeDetectionStrategy, Input, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-career-list',
  templateUrl: './career-list.component.html',
  styleUrls: ['./career-list.component.scss']
})
export class CareerListComponent {

  careerData = [
    {
      id: 1,
      title: 'Cybersecurity Analyst',
      position: 'Full-Time',
      noOfOpenings: 2,
      description: 'Join our team to monitor, analyze, and respond to cybersecurity threats and incidents.',
      responsibilities: [
        'Conduct real-time threat monitoring and analysis',
        'Investigate security breaches and incidents',
        'Perform regular vulnerability assessments',
        'Work with IT team to implement security improvements'
      ],
      location: 'Bangalore, India'
    },
    {
      id: 2,
      title: 'Penetration Tester',
      position: 'Full-Time',
      noOfOpenings: 1,
      description: 'Simulate real-world attacks to identify system weaknesses and recommend remediation steps.',
      responsibilities: [
        'Perform ethical hacking and vulnerability testing',
        'Document test findings and security gaps',
        'Collaborate with development and network teams',
        'Stay updated with latest threat vectors'
      ],
      location: 'Remote'
    },
    {
      id: 3,
      title: 'Security Operations Center (SOC) Analyst',
      position: 'Full-Time',
      noOfOpenings: 2,
      description: 'Monitor and respond to cybersecurity alerts in a 24/7 environment.',
      responsibilities: [
        'Monitor SIEM tools for security alerts',
        'Escalate and respond to incidents based on severity',
        'Perform log analysis and threat detection',
        'Support ongoing security operations and audits'
      ],
      location: 'Hyderabad, India'
    },
    {
      id: 4,
      title: 'Cybersecurity Internship Program',
      position: 'Internship (3-6 Months)',
      noOfOpenings: 5,
      description: 'Gain hands-on experience in cybersecurity under expert mentorship.',
      responsibilities: [
        'Assist with threat monitoring and analysis',
        'Support in vulnerability scanning and reporting',
        'Document incident reports and SOPs',
        'Participate in training sessions and workshops'
      ],
      location: 'Flexible / Hybrid (Preferred: Pune, India)'
    }
  ];


  ngOnInit() {
  AOS.init();
}

  JobData: any;
  showDialogBox = false;

  constructor(private renderer: Renderer2, private router: Router,) {}

  loadJobData(id: any) {
    this.JobData = this.careerData.find((jobdata: any) => jobdata.id === id);
  }


  onClickReadMore(id: any) {
    this.showDialogBox = true;
    this.loadJobData(id);
    this.renderer.addClass(document.body, 'no-scroll');
  }


  onDialogClose() {
    this.showDialogBox = false;
    this.renderer.removeClass(document.body, 'no-scroll');
  }


  onClickApply() {
    this.router.navigate(['./career/career-form'])
  }

}
