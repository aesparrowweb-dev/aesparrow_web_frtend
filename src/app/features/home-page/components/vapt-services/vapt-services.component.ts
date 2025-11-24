import { Component } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-vapt-services',
  templateUrl: './vapt-services.component.html',
  styleUrls: ['./vapt-services.component.scss']
})
export class VaptServicesComponent {
  
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
   
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
          
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    
    ]
  };

  services = [
    {
      title: 'Web Application Security Testing',
      description: 'Identifies vulnerabilities in web applications, such as injection flaws, broken authentication, and cross-site scripting (XSS), based on OWASP Top 10. Ensures secure development and deployment of your web platforms.',
      image: 'web.webp'
    },
    {
      title: 'Mobile Application Security Testing',
      description: 'Tests Android and iOS apps for issues like insecure storage, poor encryption, and improper platform usage. Helps secure sensitive user data and maintain app integrity across devices.',
      image: 'mobile.jpg'
    },
    {
      title: 'Network Security Testing',
      description: 'Assesses internal and external networks to uncover misconfigurations, open ports, and weak protocols. Simulates real-world attacks to evaluate how secure your network really is.',
      image: 'security.jpg'
    },
    {
      title: 'Server & Infrastructure Testing',
      description: 'Focuses on identifying weaknesses in servers, databases, firewalls, and routers. Helps harden critical infrastructure against unauthorized access and potential breaches.',
      image: 'server.avif'
    },
    {
      title: 'Cloud Security Assessment',
      description: 'Evaluates your cloud environment (AWS, Azure, GCP) for configuration issues, identity/access flaws, and data exposure. Ensures security posture aligns with cloud best practices and compliance standards.',
      image: 'cloud.webp'
    },
    {
      title: 'Wireless Network Penetration Testing',
      description: 'Tests Wi-Fi and wireless infrastructure for vulnerabilities like weak encryption, rogue access points, and signal leakage. Protects your organization from unauthorized wireless access.',
      image: 'wireless.jpg'
    },
    {
      title: 'API Security Testing',
      description: 'Examines REST and SOAP APIs for authentication flaws, data leaks, and broken object-level authorization. Critical for securing integrations between your apps, services, and third parties.',
      image: 'api.jpg'
    },
    {
      title: 'Source Code Review (Secure Code Audit)',
      description: 'Performs manual and automated reviews of application source code to identify insecure coding practices. Helps developers fix vulnerabilities before deployment.',
      image: 'source.jpg'
    },
    {
      title: 'Social Engineering & Phishing Simulation',
      description: 'Tests employee awareness and response to simulated phishing, impersonation, and other human-targeted attacks. Highlights security culture gaps and strengthens internal training programs.',
      image: 'iot.jpg'
    },
    {
      title: 'IoT & Embedded Device Security Testing',
      description: 'Analyzes firmware, protocols, and hardware of IoT devices for security flaws. Vital for connected environments like smart factories, healthcare devices, or home automation.',
      image: 'cial.jpg'
    },
    {
      title: 'Red Team Assessment',
      description: 'A full-scope simulated cyberattack that tests your organization\'s detection, response, and resilience. Goes beyond technical flaws to assess physical, social, and procedural weaknesses.',
      image: 'red.jpg'
    },
    {
      title: 'Black Box Testing',
      description: 'Simulates an attack with no prior knowledge of the internal systems—just like an external hacker. Useful for understanding how exposed your organization is to outside threats.',
      image: 'black.png'
    },
    {
      title: 'White Box Testing',
      description: 'Performed with full knowledge of the system architecture, source code, and credentials. Ensures a deep, comprehensive evaluation of system weaknesses.',
      image: 'white.png'
    },
    {
      title: 'Grey Box Testing',
      description: 'Combines elements of both white and black box testing to simulate an insider threat or a semi-privileged attacker. Balances depth and realism in vulnerability discovery.',
      image: 'grey.png'
    }
  ];

  constructor(){}

  // Method to scroll to specific slide
  goToSlide(slideIndex: number) {
    const slickElement = document.querySelector('.carousel') as any;
    if (slickElement && slickElement.slick) {
      slickElement.slick.slickGoTo(slideIndex);
    }
  }

  // Method to scroll to next slide
  nextSlide() {
    const slickElement = document.querySelector('.carousel') as any;
    if (slickElement && slickElement.slick) {
      slickElement.slick.slickNext();
    }
  }

  // Method to scroll to previous slide
  previousSlide() {
    const slickElement = document.querySelector('.carousel') as any;
    if (slickElement && slickElement.slick) {
      slickElement.slick.slickPrev();
    }
  }
}
