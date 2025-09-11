import { Component } from '@angular/core';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent {
  cards = [
    {
      title: 'Web & Mobile Application Security Testing',
      img: 'assets/images/home/risk.jpg',
      glitch: 'assets/images/camera_glitch.webp',
      description: 'Safeguard your digital products with in-depth assessments of web and mobile applications, including code reviews and OWASP Top 10 vulnerability testing.'
    },
    {
      title: 'Network & Server Security Testing (VAPT)',
      img: 'assets/images/home/incident.jpg',
      glitch: 'assets/images/camera_glitch.webp',
      description: 'Detect and mitigate security weaknesses across internal and external networks, servers, and firewalls with our advanced vulnerability and penetration testing services.'
    },
    {
      title: 'Cloud Security Assessment',
      img: 'assets/images/home/complience.jpg',
      glitch: 'assets/images/camera_glitch.webp',
      description: 'Secure your cloud environments (AWS, Azure, GCP) through misconfiguration checks, identity access audits, and cloud-native threat analysis tailored for your infrastructure.'
    },
    {
      title: 'Compliance & Regulatory Audits',
      img: 'assets/images/home/methodology.jpg',
      glitch: 'assets/images/camera_glitch.webp',
      description: 'Achieve compliance with ISO 27001, SOC 2, GDPR, PCI-DSS, and more. We offer detailed gap assessments, remediation guidance, and audit readiness support.'
    },
    {
      title: 'Governance, Risk & Compliance (GRC) Services',
      img: 'assets/images/home/tools.webp',
      glitch: 'assets/images/camera_glitch.webp',
      description: 'Build a robust security governance framework with our GRC solutions, enabling strategic risk management and aligning IT security with regulatory requirements.'
    },
    {
      title: 'Security Awareness & Policy Development',
      img: 'assets/images/home/testing.jpg',
      glitch: 'assets/images/camera_glitch.webp',
      description: 'Empower your teams with customized cybersecurity training, phishing simulations, and the development of comprehensive security policies aligned with industry best practices.'
    }
  ];
}
