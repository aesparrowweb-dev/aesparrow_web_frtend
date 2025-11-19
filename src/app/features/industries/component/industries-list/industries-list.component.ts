import { Component } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-industries-list',
  templateUrl: './industries-list.component.html',
  styleUrls: ['./industries-list.component.scss']
})
export class IndustriesListComponent {

  ngOnInit(): void {
  AOS.init({
    duration: 1000,
  });
}


  industries = [
    {
      "id": 1,
      "title": "Banking & Finance",
      "img": "assets/images/industries/Banking.jpg",
      "challenges": [
        "Frequent targeting by financially motivated cybercriminals and APT groups",
        "Protection of online banking portals, core banking systems, and customer data",
        "Strict compliance demands: PCI-DSS, RBI guidelines, SWIFT CSP, GLBA",
        "Real-time fraud detection and secure transaction ecosystems"
      ],
      "solutions": [
        "End-to-end Vulnerability Assessments & Penetration Testing (VAPT) for banking applications",
        "SWIFT & PCI-DSS Compliance Audits and implementation support",
        "Cloud Security for digital banking environments",
        "Security Monitoring & Incident Response Planning"
      ]
    },
    {
      "id": 2,
      "title": "Healthcare & Pharmaceuticals",
      "img": "assets/images/industries/healthcare.jpeg",
      "challenges": [
        "Exposure of Protected Health Information (PHI) and Electronic Medical Records (EMR/EHR)",
        "HIPAA, GDPR, and data residency regulations",
        "Rising attacks on clinical trial data, medical devices, and IoT in healthcare",
        "Limited cybersecurity resources and budget constraints in hospitals"
      ],
      "solutions": [
        "HIPAA & GDPR-compliant Security Frameworks",
        "Medical Device and IoT Penetration Testing",
        "Endpoint and Network Security Hardening",
        "Awareness Training for healthcare staff"
      ]
    },
    {
      "id": 3,
      "title": "Education & eLearning",
      "img": "assets/images/industries/education.jpg",
      "challenges": [
        "Rise in ransomware and phishing attacks targeting universities and schools",
        "Securing online learning platforms and virtual classrooms",
        "Protecting student information and intellectual property",
        "Budget limitations and lack of dedicated security teams"
      ],
      "solutions": [
        "Web & Cloud Application Security Testing for eLearning portals",
        "Access Control Reviews and identity management audits",
        "Phishing Simulations and Awareness Training for faculty and staff",
        "Data Protection Compliance (FERPA, GDPR, etc.)"
      ]
    },
    {
      "id": 4,
      "title": "Government & Public Sector",
      "img": "assets/images/industries/goverment.webp",

      "challenges": [
        "Critical infrastructure vulnerability to cyber warfare and espionage",
        "Compliance with national standards like CERT-IN, NIST, or MeitY",
        "Large, distributed environments with legacy IT systems",
        "Data sovereignty and digital public services protection"
      ],
      "solutions": [
        "Critical Infrastructure VAPT & Risk Assessments",
        "Compliance Readiness with NIST, CERT-IN, and ISO standards",
        "Security Policy & Governance Advisory",
        "Cyber Resilience & Business Continuity Planning"
      ]
    },
    {
      "id": 5,
      "title": "eCommerce & Retail",
      "img": "assets/images/industries/ecommerce.avif",
      "challenges": [
        "Payment fraud, data theft, and DDoS attacks",
        "PCI-DSS and consumer data protection compliance",
        "Securing mobile apps, eCommerce platforms, and backend systems",
        "API abuse and third-party vendor risks"
      ],
      "solutions": [
        "PCI-DSS Compliance Services and gap assessments",
        "Application Security Testing for web and mobile storefronts",
        "API Penetration Testing & Secure Integration Reviews",
        "24/7 Monitoring Recommendations for fraud and anomaly detection"
      ]
    },
    {
      "id": 6,
      "title": "Technology & SaaS",
      "img": "assets/images/industries/technology.jpg",
      "challenges": [
        "Cloud-native attack surfaces and multi-tenant architecture risks",
        "API vulnerabilities and insecure DevOps pipelines",
        "Constantly evolving compliance obligations (SOC 2, ISO 27001, GDPR)",
        "High-impact business continuity and SLA requirements"
      ],
      "solutions": [
        "DevSecOps Integration & secure SDLC practices",
        "Cloud Configuration Reviews & Access Control Audits",
        "SOC 2 Type II & ISO 27001 Implementation Support",
        "Threat Modeling & Zero Trust Architecture Consulting"
      ]
    },
    {
      "id": 7,
      "title": "Manufacturing & OT/ICS",
       "img": "assets/images/industries/manufacturing.webp",
      "challenges": [
        "Legacy systems not designed with cybersecurity in mind",
        "Convergence of IT and OT networks leading to expanded threat surfaces",
        "ICS/SCADA protocol vulnerabilities and lack of monitoring",
        "Downtime risks from ransomware or targeted attacks"
      ],
      "solutions": [
        "Industrial Control System (ICS) & SCADA Security Assessments",
        "OT Network Segmentation & Risk Mapping",
        "Asset Inventory & Vulnerability Management for production environments",
        "Business Continuity and Disaster Recovery Strategy Development"
      ]
    }
  ]

}
