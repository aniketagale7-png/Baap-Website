import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { Footer } from "../../footer/footer";

@Component({
  selector: 'app-data-analytics',
  imports: [CommonModule, Footer],
  templateUrl: './data-analytics.html',
  styleUrl: './data-analytics.scss'
})
export class DataAnalytics {
  fpcData = [
    {
      title: 'Interactive Data Dashboards',
      desc: 'Empowering businesses with visually rich dashboards that turn complex data into actionable insights.',
      points: [
        'Customizable, real-time dashboards',
        'Data visualization for enhanced decision-making',
        'KPI tracking and performance monitoring'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_data1.png'
    },
    {
      title: 'AI Forecasts for Smarter Strategies',
      desc: 'Leveraging artificial intelligence to predict trends and optimize business strategies for better outcomes.',
      points: [
        'AI-driven data analysis and forecasting',
        'Predictive modeling for business growth',
        'Market and customer trend predictions'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_data2.png'
    },
    {
      title: 'Optimized Data Solutions',
      desc: 'Ensuring your data is organized, secure, and optimized for accuracy and efficiency.',
      points: [
        'Data cleaning and structuring',
        'Secure data storage and management',
        'Process automation for better efficiency'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_data3.png'
    },
    {
      title: 'Efficient Customer Query Handling',
      desc: 'Providing fast, accurate, and responsive customer support to enhance user experience.',
      points: [
        '24/7 customer query resolution',
        'AI chatbots and human-assisted support',
        'Multi-channel customer interaction'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_data4.png'
    },
    {
      title: 'Precision Record Management',
      desc: 'Maintaining precise and well-organized records to improve business operations and compliance.',
      points: [
        'Data entry and validation',
        'Real-time database management',
        'Compliance and security monitoring'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_data5.png'
    },
    {
      title: 'Assisting Customers with Product Issues',
      desc: 'Offering end-to-end customer assistance to resolve issues efficiently and enhance brand loyalty.',
      points: [
        'Technical support and troubleshooting',
        'Personalized assistance for customer concerns',
        'Proactive issue resolution strategies'
      ],
      img: 'https://baapcompany.com/wp-content/uploads/2025/02/thebaapcompany_data6.png'
    }
  ];


   businessAreas = [
    {
      title: 'NSIGHTFUL',
      description: 'Leveraging data-driven strategies to uncover actionable insights that drive business success.'
    },
    {
      title: 'INTELLIGENT',
      description: 'AI-powered automation streamlines operations, reducing manual effort and improving efficiency.'
    },
    {
      title: 'TAILORED',
      description: 'Custom-built solutions designed to align perfectly with your unique business requirements.'
    },
    {
      title: 'SCALABLE',
      description: 'Adaptable infrastructure that grows with your business, ensuring long-term reliability.'
    },
    {
      title: 'EFFICIENT',
      description: 'Optimized workflows and real-time analytics enhance decision-making and productivity.'
    },
    {
      title: 'SEAMLESS',
      description: 'Easy integration with existing systems, ensuring a smooth transition and minimal disruption.'
    },
  ];
    constructor(private el: ElementRef) { }

    ngAfterViewInit() {
    const card = document.querySelector('.custom-carousel-card') as HTMLElement;
    // if (card) {
    //   this.cardWidth = card.offsetWidth + 32;
    // }
    const fadeElements: NodeListOf<HTMLElement> =
      this.el.nativeElement.querySelectorAll('.fade-left, .fade-up, .fade-right');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          target.classList.add('show');
        } else {
          target.classList.remove('show');
        }
      });
    }, { threshold: 0.2 });

    fadeElements.forEach(el => observer.observe(el));

  }
}
