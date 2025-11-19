import { Component } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent {
features = [
  {
    title: 'Tailored Cybersecurity Solutions',
    description: 'Every engagement is built around your organization’s goals and risk profile.'
  },
  {
    title: 'Proven Expertise',
    description: 'Our team brings decades of hands-on experience and industry certifications.'
  },
  {
    title: 'Client-Centric Approach',
    description: 'We work as partners, not just providers — ensuring clear communication and proactive support.'
  },
  {
    title: 'Global Standards & Recognition',
    description: 'Our certifications and partnerships show our commitment to excellence.'
  }
];

}
